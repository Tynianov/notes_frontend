<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit="login">
                                    <v-text-field
                                            name="username"
                                            label="Username"
                                            type="text"
                                            v-model="email"
                                    ></v-text-field>
                                    <v-text-field
                                            name="password"
                                            label="Password"
                                            id="password"
                                            type="password"
                                            v-model="password"
                                    ></v-text-field>
                                    <v-btn type="submit" color="primary">Login</v-btn>
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
    export default {
        name: "Login",
        data: () => ({
            email: '',
            password: ''
        }),
        methods: {
            login(){

            }
        }
    }
</script>

<style scoped>

</style>