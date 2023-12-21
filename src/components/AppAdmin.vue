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
import {useCalendarStore} from "../../store/calendarStore";
import {storeToRefs} from "pinia";

const calendarStore = useCalendarStore()
const {events} = storeToRefs(calendarStore)


const config = reactive({
    defaultMode: 'month',
    locale: 'en-US',
})
</script>