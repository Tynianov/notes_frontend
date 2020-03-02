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
                                    ></v-text-field>
                                    <v-text-field
                                            name="firstName"
                                            label="First Name"
                                            type="text"
                                            v-model="userDetails.lastName"
                                    ></v-text-field>
                                    <v-text-field
                                            name="email"
                                            label="Email"
                                            type="text"
                                            v-model="userDetails.email"
                                    ></v-text-field>
                                    <v-text-field
                                            name="password"
                                            label="Password"
                                            id="password"
                                            type="password"
                                            v-model="userDetails.password"
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
    import {BASE_AUTH_URL} from '../lib/auth'
    import router from '../router/index'
    import axios from 'axios'

    export default {
        name: "Singup",
        data: () => ({
            userDetails: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }),
        methods: {
            signup(e){
                e.preventDefault();

                axios.post(BASE_AUTH_URL+'/register', this.userDetails)
                    .then(res => {
                        router.push({name: 'dashboard'})
                    })
                    .catch(err => {

                    })
            }
        }
    }
</script>

<style scoped>

</style>
