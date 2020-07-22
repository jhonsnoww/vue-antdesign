<template>
  <a-form-model
    ref="ruleForm"
    :model="genreform"
    :rules="rules"
    layout="inline"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item ref="name" prop="name">
      <a-input v-model="genreform.name" placeholder="Genre Name">
        <!-- @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        " -->
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
            message: "Please input genre name",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["genreform"])
  },
  methods: {
    handleSubmit() {}
  }
};
</script>
