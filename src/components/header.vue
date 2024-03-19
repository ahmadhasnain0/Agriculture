<template>
    <div class="container-fluid bg-header px-0  ">
        <Nav />
        <div class="container  py-5 px-3 px-sm-0">
            <div class="row mb-5">
                <div class="col-12 text-center">
                    <h1 class="w-100 text-white">
                        Natural Products
                    </h1>
                    <h1 class="w-100 text-white">
                        For Lovers of <span class="text-primary ">Healthy</span>
                    </h1>
                    <h1 class="w-100 text-white">
                        Organic Food
                    </h1>
                    <a class="btn bg-secondary px-3 py-2 mt-3 rounded text-white">Discover More</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import "@/src/assets/scss/components/_header.scss"
import Nav from "./nav.vue"
</script>