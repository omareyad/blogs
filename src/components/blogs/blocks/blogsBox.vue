<template>
  <div class="box_blogs">
    <!-- popOver On Delete Btn -->
    <el-popover :visible="visible" placement="top" :width="160">
      <p>Are you sure to delete this Blog ?</p>
      <div style="text-align: right; margin: 0">
        <el-button size="small" text @click="visible = false">cancel</el-button>
        <el-button
          size="small"
          type="primary"
          @click="
            deleteBlog(props.data.id);
            visible = false;
          "
        >
          confirm
        </el-button>
      </div>
      <template #reference>
        <div class="operateBtn delete_blogs" @click="visible = true">
          <i class="bx bx-trash"></i>
        </div>
      </template>
    </el-popover>
    <!-- End -->
    <!-- Edit Btn -->
    <router-link
      :to="`/blogs/edit/${props.data.id}`"
      class="operateBtn edit_blogs"
    >
      <i class="bx bxs-edit-alt"></i>
    </router-link>
    <!--  -->
    <div class="image">
      <template v-if="props.data.image">
        <img :src="props.data.image" :alt="props.data.name" />
      </template>
      <template v-else>
        <img :src="defaultImage" :alt="props.data.name" />
      </template>
    </div>
    <div class="box_info">
      <div class="time_added">
        <div class="time">
          <i class="bx bx-time bx-spin"></i>
          <span>{{ props.data.time }}</span>
        </div>
        <div class="added_By">
          <i class="bx bxs-user"></i>
          <span>By {{ props.data.added }}</span>
        </div>
      </div>
      <div class="name">
        <h3>{{ props.data.name }}</h3>
      </div>
      <div class="desc">
        <p>{{ props.data.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["data"]);
const visible = ref(false);
const defaultImage = ref(
  "https://images.unsplash.com/photo-1653963426837-8fb4d7b5d262?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
const deleteBlog = (id) => {
  store.commit("deleteBlog", id);
};
</script>
