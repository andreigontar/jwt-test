<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <form @submit.prevent="authUser">
                    <div class="mb-3">
                        <label for="loginInput" class="form-label">Login</label>
                        <input ref="loginElem" v-model.trim="form.login" type="text" class="form-control" id="loginInput" @input="validateLogin" required>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">Password</label>
                        <input ref="passElem" v-model.trim="form.password" type="password" class="form-control" id="passwordInput" @input="validatePassword" required>
                    </div>
                    <button type="submit" class="btn btn-primary" id="submitAuth" :disabled="!isValidForm">Enter</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, computed, onMounted} from "vue";
import { useVuelidate } from '@vuelidate/core';
import {required, maxLength, minLength} from '@vuelidate/validators';
import {useUserStore} from "../../store/userStore";

const userStore = useUserStore()

const form = ref({
    login: '',
    password: ''
});

const loginElem = ref(null)
const passElem = ref(null)

const rules = {
    form: {
        login: {
            required,
            maxLength: maxLength(20),
            minLength: minLength(2),
        },
        password: {
            required,
            maxLength: maxLength(20),
            minLength: minLength(4),
        }
    }
}

const validateLogin = () => {
    v$.value.form.login.$touch()
    if (!v$.value.form.login.$error) {
        loginElem.value.classList.add('is-valid')
        loginElem.value.classList.remove('is-invalid')
    } else {
        loginElem.value.classList.add('is-invalid')
        loginElem.value.classList.remove('is-valid')
    }
}
const validatePassword = () => {
    v$.value.form.password.$touch()
    if (!v$.value.form.password.$error) {
        passElem.value.classList.add('is-valid')
        passElem.value.classList.remove('is-invalid')
    } else {
        passElem.value.classList.add('is-invalid')
        passElem.value.classList.remove('is-valid')
    }
}
const validateFrom = () => {
    validateLogin()
    validatePassword()
}

const v$ = useVuelidate(rules, { form });
const isValidForm = computed(() => !v$.value.form.login.$error && !v$.value.form.password.$error)


const authUser = async () => {
    validateFrom()
    if (isValidForm.value) await userStore.login(form.value)
}

onMounted(() => {
    validateFrom()
})

</script>