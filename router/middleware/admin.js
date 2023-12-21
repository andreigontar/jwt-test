import {useUserStore} from "../../store/userStore";
import {storeToRefs} from "pinia";

export default function admin (next){
    const userStore = useUserStore()
    const {role} = storeToRefs(userStore)

    if (role.value && !!role.value.length) {
        if (role.value.find(role => role === 'Admin')) {
            next()
        } else {
            next('/')
        }
    } else {
        console.log('else')
        next('/')
    }
}