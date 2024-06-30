<template>
    <div class="all_blog_page">
    <!-- conver Page -->
     <coverPage :data="coverPageInfo"/>
     <!-- End -->
    <allBlogs/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import allBlogs from '~@/components/blogs/allBlogs.vue';
import coverPage from '~@/components/global/coverPage.vue';
const coverPageInfo = ref({
    name:"All Blog",
    image:"https://images.unsplash.com/photo-1595309959777-08d5da891d7e?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})
</script>