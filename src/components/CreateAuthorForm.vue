<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    layout="inline"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item ref="name" prop="name">
      <a-input
        v-model="form.name"
        placeholder="Myanmar Name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      >
      </a-input>
    </a-form-model-item>
    <a-form-model-item ref="engName" prop="engName">
      <a-input
        v-model="form.engName"
        placeholder="English Name"
        @blur="
          () => {
            $refs.engName.onFieldBlur();
          }
        "
      >
      </a-input>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: "Please input myanmar name",
            trigger: "blur"
          }
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        engName: [
          {
            required: true,
            message: "Please select EngName",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["form"])
  },
  created() {
    console.log("haha");
  },
  methods: {
    handleSubmit() {}
  }
};
</script>
