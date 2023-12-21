<template>
    <div class="container cardlist">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col" v-for="(item, i) in product">
                <div class="card mb-3 h-100">
                    <div class="imgBlock">
                        <img :src="require(`@/assets/images/${item.img}`)" class="card-img-top" alt="{{ item.title }}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.description }}</p>
                        <a :href="`/card/${i + 1}`" class="btn btn-primary">view</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useProductStore} from "../../store/producStore";
import {storeToRefs} from "pinia";

const productStore = useProductStore()
const {product} = storeToRefs(productStore)
</script>