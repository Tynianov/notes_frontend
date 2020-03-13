<template>
    <v-dialog
        :value="value"
        @input="v => $emit('input', v)"
        width="700"
        height="600"
    >
        <v-card>
            <v-card-title>
                <h3>Note title</h3>
                <v-spacer/>

            </v-card-title>
            <v-card-text>
                <p>Some text</p>
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
        }
    }
</script>

<style scoped>

</style>