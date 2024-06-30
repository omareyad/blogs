<template>
  <header :class="['mainHeader', nav_scroll ? 'hasBg' : '']">
    <div class="container">
      <div class="flex_header">
        <div class="logo_site">
          <router-link to="/">
            <img src="~@/assets/logo.png" alt="Logo"
          /></router-link>
        </div>
        <div class="links_site">
          <router-link to="/">Home</router-link>
          <router-link to="/blogs/all">All Blogs</router-link>
          <router-link to="/">About</router-link>
          <router-link to="/">Contact Us</router-link>
        </div>
        <div class="button_site">
          <router-link to="/blogs/new" class="queryBtn signup"
            >New Blog</router-link
          >
        </div>
        <div class="mobile_nav" @click="mobileDialog = true">
          <i class="bx bx-menu"></i>
        </div>
      </div>
    </div>
  </header>
  <!-- Mobile Side -->
  <el-drawer size="50%" v-model="mobileDialog">
    <div class="mobile_sidebar_wraps">
      <router-link to="/" class="logo">
        <img src="~@/assets/logo.png" alt="logo" />
      </router-link>
      <div class="list_link_mobile">
        <router-link to="/">Home</router-link>
        <router-link to="/blogs/all">All Blogs</router-link>
        <router-link to="/blogs/new">New Blogs</router-link>
        <router-link to="/">About</router-link>
        <router-link to="/">Contact Us</router-link>
      </div>
    </div>
  </el-drawer>
  <!-- Mobile Side -->
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const nav_scroll = ref(false);
const mobileDialog = ref(true);
// Methods
const scroll_down_page = () => {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav_scroll.value = true;
    } else {
      nav_scroll.value = false;
    }
  });
};
const closeSideOnChnageLink = () => {
  mobileDialog.value = false;
};
// Watch # When User change Route Close Mobile Side By Default ;
watch(route, (to) => {
  mobileDialog.value = false;
});

onMounted(() => {
  scroll_down_page();
  if (window.scrollY > 100) {
    nav_scroll.value = true;
  } else {
    nav_scroll.value = false;
  }
});
</script>
