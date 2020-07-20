<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="name" label="Title" prop="title">
      <a-input
        v-model="form.title"
        @blur="
          () => {
            $refs.title.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="Popular" prop="isPopular">
      <a-switch v-model="form.isPopular" />
    </a-form-model-item>
    <a-form-model-item label="Author" prop="author">
      <a-select v-model="form.author" placeholder="please select author">
        <a-select-option value="mkss">
          မင်းခိုက်စိုးစံ
        </a-select-option>
        <a-select-option value="tymw">
          တာယာမင်းဝေ
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model
      ref="dynamicValidateForm"
      :model="form"
      v-bind="formItemLayoutWithOutLabel"
    >
      <a-form-model-item
        v-for="(author, index) in dynamicValidateForm.authors"
        :key="author.key"
        v-bind="index === 0 ? formItemLayout : {}"
        :label="index === 0 ? 'Authors' : ''"
        :prop="'authors.' + index + '.value'"
        :rules="{
          required: true,
          message: 'Author can not be null',
          trigger: 'blur'
        }"
      >
        <a-input
          v-model="author.value"
          placeholder="please input author"
          style="width: 60%; margin-right: 8px"
        />
        <a-icon
          v-if="dynamicValidateForm.authors.length > 1"
          class="dynamic-delete-button"
          type="minus-circle-o"
          :disabled="dynamicValidateForm.authors.length === 1"
          @click="removeDomain(author)"
        />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayoutWithOutLabel">
        <a-button type="dashed" style="width: 60%" @click="addDomain">
          <a-icon type="plus" /> Add Author
        </a-button>
      </a-form-model-item>
    </a-form-model>
    <a-form-model-item label="Description" prop="desc">
      <a-input v-model="form.desc" type="textarea" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetForm">
        Reset
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 }
        }
      },
      dynamicValidateForm: {
        authors: [],
        generes: []
      },
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        title: "",
        author: undefined,
        date1: undefined,
        isPopular: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }
        ],
        author: [
          {
            required: true,
            message: "Please select author",
            trigger: "change"
          }
        ],
        date1: [
          { required: true, message: "Please pick a date", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change"
          }
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please input description",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    removeDomain(item) {
      let index = this.dynamicValidateForm.authors.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.authors.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.authors.push({
        value: "",
        key: Date.now()
      });
    }
  }
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
