<template>
    <v-app>
        <v-app-bar app height="90"
            color="indigo darken-1"
        >
            <v-toolbar-title>Your notes</v-toolbar-title>
        </v-app-bar>
        <v-layout column mt-8>
            <v-layout row wrap justify-space-between ml-2>
                <v-flex xs12 sm4 ml-4>
                    <v-text-field
                        type="text"
                        label="Search"
                    >
                    </v-text-field>
                </v-flex>
                <v-flex sm6 mr-10>
                    <v-layout row align-center>
                        <v-select
                            :items="getFilterItems"
                        />
                        <v-btn>Add Note</v-btn>
                    </v-layout>
                </v-flex>
            </v-layout>

            <v-layout row wrap ml-2 mr-2>
                <v-flex  v-for="i in 10">
                    <NoteCard/>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-app>
</template>

<script>
    import NoteCard from "@/components/dashboard/NoteCard";

    export default {
        name: "Dashboard",
        components: {NoteCard},
        data: () => ({
        }),
        computed:{
            getFilterItems(){
                return ["Red", "Green", "Blue"]
            }
        }
    }
</script>

<style scoped>

</style>