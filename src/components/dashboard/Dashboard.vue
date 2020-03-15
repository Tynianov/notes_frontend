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
                        <v-flex xs12 sm6 ml-4>
                            <v-text-field
                                type="text"
                                label="Search"
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex sm6 row align-center
                                class="d-flex flex-row-reverse"
                        >
                            <v-btn>Add color</v-btn>

                            <v-btn>Add Note</v-btn>
                        </v-flex>
                    </v-layout>
                <v-container grid-list-md fluid>
                    <v-layout row wrap>
                        <v-flex  v-for="note in notes">
                            <NoteCard
                                :note="note"
                                :click="openNoteModal(note._id)"
                            />
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import NoteCard from "./partials/NoteCard";
    import NoteDialog from "./partials/NoteDialog";
    import service from '../../services/dashboard'

    export default {
        name: "Dashboard",
        components: {NoteCard, NoteDialog},
        data: () => ({
            showNotesModal: false,
            notes: [],
        }),
        computed:{
        },
        methods: {
            openNoteModal(){
                this.showNotesModal = true;
            },
            getNotesList(){
                service.getNotesList()
                    .then(res => {
                        this.notes = res.data.notes;
                    })
            }

        },
        created() {
            this.getNotesList();
        }
    }
</script>

<style scoped>

</style>
