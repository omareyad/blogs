<template>
    <div class="hero_home_slider_wraps pt-120">
        <!--  carousel  -->
        <el-carousel height="400px" motion-blur :interval="4000" type="card">
      <el-carousel-item v-for="item in HeroImages" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- End  -->
    </div>
</template>
<script setup>
import { ref } from 'vue';
const HeroImages = ref([
    'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1527690789675-4ea7d8da4fe3?q=80&w=2892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1657664072470-99b02c2143f2?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
])
</script>
<style>
</style>