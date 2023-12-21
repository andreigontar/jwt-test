import {createPinia, defineStore, mapStores} from 'pinia';
import {useUserStore} from "./userStore.js";
import {useCalendarStore} from "./calendarStore";
import {useProductStore} from "./producStore";
import {useMockJWTStore} from "./mockJWTStore";

const pinia = createPinia();

export const useMainStore = defineStore('main', () => {
    return {
        ...mapStores(useUserStore, useCalendarStore, useProductStore, useMockJWTStore)
    }
})

export default pinia;