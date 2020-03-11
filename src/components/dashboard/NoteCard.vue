<template>
    <v-hover  v-slot:default="{ hover }">
        <v-card class="note-card"
            :elevation="hover ? 16 : 6"
            @click="openNoteModal"
        >
            <v-card-title>
                {{title}}
                <v-spacer></v-spacer>
                <span :style="{color: color}">
                    <v-icon class="inline-icon" :color="color">brightness_1</v-icon>
                </span>
            </v-card-title>
            <v-card-text>
                {{text}}
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "NoteCard",
        props:{
            note: Object,
            click: Function
        },
        data: () => ({
            created: '',
            notify_at: '',
            title: 'Note',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            color: '#f0252b'
        }),
        methods: {
            openNoteModal(){
                alert('hello')
            }
        }
    }
</script>

<style scoped>
.note-card{
    margin: 6px;
    max-width: 300px;
    max-height: 400px;
}
</style>