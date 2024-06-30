<template>
    <div class="new_blog_page">
    <!-- conver Page -->
     <coverPage :data="coverPageInfo"/>
     <!-- End -->
     <newBlogs/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import newBlogs from '~@/components/blogs/newBlogs.vue';
import coverPage from '~@/components/global/coverPage.vue';
const coverPageInfo = ref({
    name:"new Blog",
    image:"https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})
</script>