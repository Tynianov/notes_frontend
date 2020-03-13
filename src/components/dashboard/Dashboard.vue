<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <v-app-bar app height="90"
                    color="indigo darken-1"
                >
                    <v-toolbar-title>Your notes</v-toolbar-title>
                </v-app-bar>
                <NoteDialog
                        v-model="showNotesModal"
                />
                    <v-layout row wrap justify-space-between ml-2>
                        <v-flex xs12 sm4 ml-4>
                            <v-text-field
                                type="text"
                                label="Search"
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex sm6 mr-10 row align-center>
                            <v-select
                                :items="getFilterItems"
                            />
                            <v-btn>Add Note</v-btn>
                        </v-flex>
                    </v-layout>
                <v-container grid-list-md fluid>
                    <v-layout row wrap>
                        <v-flex  v-for="i in 12">
                            <NoteCard
                                :click="openNoteModal"
                            />
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import NoteCard from "@/components/dashboard/partials/NoteCard";
    import NoteDialog from "@/components/dashboard/partials/NoteDialog";

    export default {
        name: "Dashboard",
        components: {NoteCard, NoteDialog},
        data: () => ({
            showNotesModal: false,
            notes: [
                {title: 'title1', text: 'Lorem ipsum dolor sit amet, consectetur',}
            ]

        }),
        computed:{
            getFilterItems(){
                return ["Red", "Green", "Blue"]
            }
        },
        methods: {
            openNoteModal(){
                this.showNotesModal = true;
            }
        }
    }
</script>

<style scoped>

</style>