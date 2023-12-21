<template>
    <div class="container cardlist">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col" v-for="i in 6">
                <div class="card mb-3">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max500/446198364.jpg?k=c8c83021ddab5bf215bba18ae11c5b74fe5b44f7ca33d4d702814983a9bfe361&o=&hp=1" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title {{ i }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/card" class="btn btn-primary">view</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>