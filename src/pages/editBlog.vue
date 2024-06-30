<template>
    <div class="edit_blog_page">
    <!-- conver Page -->
     <coverPage :data="coverPageInfo"/>
     <!-- End -->
     <editBlogs/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import editBlogs from '~@/components/blogs/editBlogs.vue';
import coverPage from '~@/components/global/coverPage.vue';
const coverPageInfo = ref({
    name:"Edit Blog",
    image:"https://images.unsplash.com/photo-1662729251379-1691a6a6655d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})
</script>