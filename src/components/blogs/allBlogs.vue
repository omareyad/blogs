<template>
  <div class="last_blogs_wraps">
    <div class="title_section">
      <h1>All Gamming blogs</h1>
      <div class="inner_last">
        <div class="container">
          <div class="row">
            <template v-for="singleBlog in BlogListStore" :key="singleBlog.id">
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <blogsBox :data="singleBlog" />
                {{}}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import blogsBox from "~@/components/blogs/blocks/blogsBox.vue";
// import VueX
const store = useStore();
const BlogListStore = computed(() => store.getters.BlogsList);
</script>
