<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Sign Up</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit="signup">
                                    <v-text-field
                                            name="firstName"
                                            label="First Name"
                                            type="text"
                                            v-model="userDetails.firstName"
                                            :error-messages="validationErrors.firstName"
                                    ></v-text-field>
                                    <v-text-field
                                            name="firstName"
                                            label="First Name"
                                            type="text"
                                            v-model="userDetails.lastName"
                                            :error-messages="validationErrors.lastName"
                                    ></v-text-field>
                                    <v-text-field
                                            name="email"
                                            label="Email"
                                            type="text"
                                            v-model="userDetails.email"
                                            :error-messages="validationErrors.email"
                                    ></v-text-field>
                                    <v-text-field
                                            name="password"
                                            label="Password"
                                            id="password"
                                            type="password"
                                            v-model="userDetails.password"
                                            :error-messages="validationErrors.password"
                                    ></v-text-field>
                                    <v-text-field
                                            name="confirmPassword"
                                            label="Confirm password"
                                            id="confirmPassword"
                                            type="password"
                                            v-model="userDetails.passwordConfirm"
                                            :error-messages="validationErrors.passwordConfirm"
                                    ></v-text-field>
                                    <v-btn type="submit" color="primary">Signup</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {BASE_AUTH_URL, signUp} from '../lib/auth'
    import router from '../router/index'
    import axios from 'axios'

    export default {
        name: "Singup",
        data: () => ({
            userDetails: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                passwordConfirm: null
            },
            validationErrors: {}
        }),
        methods: {
            signup(e){
                e.preventDefault();
                console.log('!!!', this.userDetails);
                axios.post(BASE_AUTH_URL+'/register', this.userDetails)
                    .then(res => {
                        router.push({name: 'dashboard'})
                    })
                    .catch(err => {
                        console.log('err', err.response.data.errors)
                        this.validationErrors = err.response.data.errors[0];
                        console.log(this.validationErrors)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
