<template>
  <headerApp />
  <router-view></router-view>
  <footerApp />
</template>
<script setup>
// import Global components
import headerApp from "~@/components/global/header.vue";
import footerApp from "~@/components/global/footer.vue";
</script>
