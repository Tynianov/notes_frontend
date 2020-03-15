<template>
    <v-dialog
        :value="value"
        @input="v => $emit('input', v)"
        width="700"
        height="600"
    >
        <v-card>
            <v-card-title>
                <h3>{{note.title}}</h3>
                <v-spacer/>
                <v-btn>Edit</v-btn>
            </v-card-title>
            <v-card-subtitle>
                <span :style="{color: note.color}">
                    <v-icon class="inline-icon" :color="note.color">brightness_1</v-icon>
                </span>
            </v-card-subtitle>
            <v-card-text>
                <div>
                    <p>{{note.text}}}</p>
                    <p>Created - {{}}</p>
                    <v-spacer/>
                    <p>Deadline - {{}}</p>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn>Done</v-btn>
                <v-spacer/>
                <v-btn>Delete</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "NoteDialog",
        props: {
            value: Boolean,
            note: Object
        }
    }
</script>

<style scoped>

</style>
