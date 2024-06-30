<template>
  <div
    class="cover_other_page_wraps"
    :style="`background-image: url(${props.data.image});`"
  >
    <div class="container">
      <div class="inner_cover">
        <div class="title_page">{{ props.data.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["data"]);
</script>
