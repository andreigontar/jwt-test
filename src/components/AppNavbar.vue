<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a href="/" class="btn btn-outline-primary">Home</a>
            <a v-if="!isLogedIn" href="/auth" class="btn btn-outline-success" id="login">Log in</a>
            <button v-else @click="userStore.logout()" class="btn btn-outline-danger" id="login">Log out</button>
        </div>
    </nav>

</template>

<script setup>
import {useUserStore} from "../../store/userStore";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";

const userStore = useUserStore()
const {isLogedIn} = storeToRefs(userStore)

onMounted(() => {
    console.log(isLogedIn.value)
})
</script>