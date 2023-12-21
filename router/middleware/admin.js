import {useUserStore} from "../../store/userStore";
import {storeToRefs} from "pinia";

export default function admin (next){
    const userStore = useUserStore()
    const {role} = storeToRefs(userStore)

    for (let group of role.value) {
        if (group === 'Admin') {
            next();
        } else {
            next('/')
        }
    }
}