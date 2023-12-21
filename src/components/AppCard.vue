<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img :src="require(`@/assets/images/${oneProduct.img}`)" class="img-fluid" alt="{{ oneProduct.title }}">
            </div>
            <div class="col-md-6">
                <h2>{{ oneProduct.title }}</h2>
                <p>{{ oneProduct.description }}</p>
                <h3>{{ oneProduct.price }}</h3>
                <button class="btn btn-primary">to book</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useProductStore} from "../../store/producStore";
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()
const productStore = useProductStore()

const getId = () => {
    let path = route.path
    let arr = path.split('/')
    return arr[arr.length - 1] - 1
}

const oneProduct = ref(productStore.getOne(getId()))
</script>