import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode';
import {useMockJWTStore} from "./mockJWTStore";
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

export const useUserStore = defineStore('user', () => {

    const mockJWTStore = useMockJWTStore()
    const router = useRouter()

    const user = ref(JSON.parse(localStorage.getItem('user')))
    const role = computed(() => user.value ? user.value['cognito:groups'] : null)
    const isLogedIn = computed(() => !!role.value)

    const name = computed(() => user.value ? user.value['given_name'] : null)
    const email = computed(() => user.value ? user.value['email'] : null)


    const login = async (credentials) => {
        let response = await mockJWTStore.auth(credentials)

        if (response) {
            const token = jwtDecode(response.token)
            localStorage.setItem('user', JSON.stringify(token))

            setUser()
            await router.push({path: role.value.find(role => role === 'Admin') ? '/admin' : '/'})
        }
    }
    const logout = async () => {
        localStorage.removeItem('user')
        user.value = null
        await router.push({path: '/'})
    }

    const setUser = () => user.value = JSON.parse(localStorage.getItem('user'))

    return {
        role,
        isLogedIn,
        name,
        email,
        logout,
        login,
    }
})