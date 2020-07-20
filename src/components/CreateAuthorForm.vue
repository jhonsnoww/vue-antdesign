<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    layout="inline"
    @submit="handleSubmit"
  >
    <a-form-item
      :validate-status="userNameError() ? 'error' : ''"
      :help="userNameError() || ''"
    >
      <a-input
        v-decorator="[
          'myanmar',
          {
            rules: [
              {
                required: true,
                message: 'Please input myanmar name!'
              }
            ]
          }
        ]"
        placeholder="Myanmar Name"
      >
      </a-input>
    </a-form-item>
    <a-form-item
      :validate-status="passwordError() ? 'error' : ''"
      :help="passwordError() || ''"
    >
      <a-input
        v-decorator="[
          'eng',
          {
            rules: [
              { required: true, message: 'Please input Author Eng Name!' }
            ]
          }
        ]"
        placeholder="English Name"
      >
      </a-input>
    </a-form-item>
  </a-form-model>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,

      form: this.$form.createForm(this, { name: "horizontal_login" }),
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
            message: "Please select Activity zone",
            trigger: "change"
          }
        ]
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("myanmar") && getFieldError("myanmar");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("eng") && getFieldError("eng");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
