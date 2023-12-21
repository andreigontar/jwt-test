<template>
    <div class="container is-light-mode">
        <Qalendar
            :selected-date="new Date(2023, 7, 1)"
            :events="events"
            :config="config"
        />
    </div>
</template>

<script setup>
import { Qalendar } from "qalendar";
import {reactive} from "vue";

const events = reactive([
    {
        id: 1,
        room: 101,
        time: { start: "2023-08-01", end: "2023-08-05" },
        status: 'confirmed',
        color: "green",
        guest: 'John Doe',
        title: "John Doe",
        isEditable: true,
    },
    {
        title: "Ralph on holiday",
        with: "Rachel Greene",
        time: { start: "2022-05-10", end: "2022-05-22" },
        color: "green",
        isEditable: true,
    }
])

const config = reactive({
    defaultMode: 'month',
    locale: 'en-US',
})
</script>