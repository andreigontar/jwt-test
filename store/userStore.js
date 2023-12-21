import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode';
import {useMockJWTStore} from "./mockJWTStore";
import {computed, nextTick} from "vue";
import {useRouter} from "vue-router";

export const useUserStore = defineStore('user', () => {

    const mockJWTStore = useMockJWTStore()
    const router = useRouter()

    const user = computed(() => {
        get: JSON.parse(localStorage.getItem('user')),
        set: (value) => {
            user.value = value
        }
    })
    const role = computed(() => user.value ? user.value['cognito:groups'] : null)

    const isLogedIn = computed(() => !!role.value)

    const login = async (credentials) => {
        let response = await mockJWTStore.auth(credentials)

        if (response) {
            const token = jwtDecode(response.token)
            localStorage.setItem('user', JSON.stringify(token))
        }
    }
    const logout = async () => {
        user.value = null
        console.log('logout')
        localStorage.removeItem('user')
        await nextTick()
        console.log('1')
        await router.push({path: '/'})
        console.log('2')
    }

    return {
        role,
        isLogedIn,
        logout,
        login,
    }
})