<template>
  <div class="new_blogs_wraps">
    <div class="container">
      <div class="title">Edit Blogs</div>
      <div class="inner_form">
        <el-form
          ref="mainFormRef"
          :rules="rules_validation"
          :model="formInputs"
        >
          <div class="row">
            <div class="col-md-6">
              <div class="col_inp">
                <el-form-item prop="title">
                  <label for="">Title Blog</label>
                  <el-input
                    v-model="formInputs.title"
                    @keyup="onUserEdit"
                    placeholder=""
                  />
                </el-form-item>
              </div>
            </div>
            <div class="col-md-6">
              <div class="col_inp timer_form">
                <el-form-item prop="timer">
                  <label for="">Timer Blog</label>
                  <el-input
                    v-model="formInputs.timer"
                    placeholder=""
                    readonly
                  />
                </el-form-item>
              </div>
            </div>
            <div class="col-12">
              <div class="col_input">
                <label for="">Description Blog</label>
                <el-form-item prop="description">
                  <el-input
                    v-model="formInputs.description"
                    @keyup="onUserEdit"
                    placeholder=""
                    type="textarea"
                  />
                </el-form-item>
              </div>
            </div>
            <div class="col-12">
              <div class="controll_button">
                <el-tooltip
                  effect="dark"
                  content="Save Blog"
                  placement="top-start"
                >
                  <div class="controll save" @click="onSubmitForm(mainFormRef)">
                    <i class="bx bx-save"></i>
                  </div>
                </el-tooltip>
                <el-tooltip
                  effect="dark"
                  content="Continue Timer Blog"
                  placement="top-start"
                >
                  <div
                    :class="[
                      'controll start',
                      activeStartButton ? 'disabled' : '',
                    ]"
                    @click="startTimer"
                  >
                    <i class="bx bx-play"></i>
                  </div>
                </el-tooltip>
                <el-tooltip
                  effect="dark"
                  content="Stop Timer Blog"
                  placement="top-start"
                >
                  <div
                    :class="[
                      'controll stop',
                      activeStopButton ? 'disabled' : '',
                    ]"
                    @click="stopTimer"
                  >
                    <i class="bx bx-stop"></i>
                  </div>
                </el-tooltip>
              </div>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { UseTimerUp } from "~@/composable/timerUp.js";
import { ref, reactive, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
let router = ref(""); // router Params Query etc...
let route = ref(""); // route Push - Change etc..
router.value = useRouter();
route.value = useRoute();
import { useStore } from "vuex";
const store = useStore();
const BlogListStore = computed(() => store.getters.BlogsList);
const blogIsEditiing = ref("");
// Form Reactive
const mainFormRef = ref();
const formInputs = reactive({
  title: "",
  description: "",
  timer: "",
});
const rules_validation = reactive({
  title: [
    {
      required: true,
      message: "Title Blog Is Requried",
      trigger: "blur",
    },
  ],
  timer: [
    {
      required: true,
      message: "Timer Blog more than 1 sec",
      trigger: "blur",
    },
  ],
  description: [
    {
      required: true,
      message: "Description Blog Is Requried",
      trigger: "blur",
    },
  ],
});

const onSubmitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // if valid all filed
      stopTimer();
      let dataSender = {
        id: parseInt(route.value.params.id),
        name: formInputs.title,
        time: formInputs.timer,
        description: formInputs.description,
        image: BlogListStore.value[findIndex].image
          ? BlogListStore.value[findIndex].image
          : "", // if has image :same image : set default image #
        added: "Admin",
      };
      // call store mutation to Edit object or call Api [Post] to Save & Edit object in DB #
      store.commit("editBlog", dataSender);
      formEl.resetFields();
      router.value.push("/blogs/all");
    } else {
      console.log("error submit!", fields);
    }
  });
};
// End Form #

// Find any Blog is Editing Now and Fill Data in Form #
let findIndex = BlogListStore.value.findIndex(
  (x) => x.id == parseInt(route.value.params.id)
);
blogIsEditiing.value = BlogListStore.value[findIndex];
formInputs.title = blogIsEditiing.value.name;
formInputs.description = blogIsEditiing.value.description;
formInputs.timer = blogIsEditiing.value.time;

//   Methods to convert time to sec. => to continue time #
const lastTimeStop = blogIsEditiing.value.time;
const splitLastTimeStop = lastTimeStop.split(":"); // split it at the colons
const seconds =
  +splitLastTimeStop[0] * 60 * 60 +
  +splitLastTimeStop[1] * 60 +
  +splitLastTimeStop[2];
const {
  startTimer,
  stopTimer,
  onUserEdit, // when user start press in keyboard ==> Start Timer By Default
  activeStartButton,
  activeStopButton,
  progressTimer,
} = UseTimerUp(false, true, seconds);

// Watch # When User click on Continue Button reset Timer Input from static Timer to Dynmic Timer ++ ;
watch(
  () => activeStartButton.value,
  (currentValue) => {
    if (currentValue) {
      formInputs.timer = progressTimer;
    }
  }
);
</script>
