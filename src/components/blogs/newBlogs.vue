<template>
  <div class="new_blogs_wraps">
    <div class="container">
      <div class="title">Add New Blogs</div>
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
                    @keyup="onUserEdit"
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
                  content="Start Timer Blog"
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
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
let router = ref(""); // router Params Query etc...
import { useStore } from "vuex";
const store = useStore();
const BlogListStore = computed(() => store.getters.BlogsList);
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
        id: BlogListStore.value[BlogListStore.value.length - 1].id + 1,
        name: formInputs.title,
        time: formInputs.timer,
        description: formInputs.description,
        image: "",
        added: "Admin",
      };
      // call store mutation to add object or call Api [Post] to Save object in DB #
      store.commit("addBlog", dataSender);
      formEl.resetFields();
      router.value.push("/blogs/all");
    } else {
      console.log("error submit!", fields);
    }
  });
};
// End Form ##
// import composable TimerUp;
import { UseTimerUp } from "~@/composable/timerUp.js";
const {
  startTimer,
  stopTimer,
  onUserEdit,
  activeStartButton,
  activeStopButton,
  progressTimer,
} = UseTimerUp(true, false, 0);
onMounted(() => {
  router.value = useRouter();
  startTimer();
  formInputs.timer = progressTimer;
});
</script>
