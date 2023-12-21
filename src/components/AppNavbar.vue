<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a href="/" v-show="!isHome" class="btn btn-outline-primary homeLink">Home</a>
            <a href="/admin" v-show="isAdmin" class="btn btn-outline-primary">Admin panel</a>
            <p class="fs-4 font-monospace text-primary credentials" v-if="isLogedIn">{{ name + ' | ' + email }}</p>
            <a v-if="!isLogedIn" href="/auth" class="btn btn-outline-success" id="login">Log in</a>
            <button v-else @click="userStore.logout()" class="btn btn-outline-danger" id="login">Log out</button>
        </div>
    </nav>

</template>

<script setup>
import {useUserStore} from "../../store/userStore";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()

const userStore = useUserStore()
const {isLogedIn, name, email, role} = storeToRefs(userStore)

const isHome = computed(() => {
    return route.path === '/'
})

const isAdmin = computed(() => {
    return (role.value) ? !!role.value.find(role => role === 'Admin') : false;
})
</script>