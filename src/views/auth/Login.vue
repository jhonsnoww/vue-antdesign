<template>
  <div class="card center" style="min-height: 100vh;">
    <div>
      <div style="display:block;text-align:center;margin-bottom:15px;">
        <img width="160px" src="@/assets/LogoTextBlack.png" alt="" />
      </div>
      <a-card style="width: 300px">
        <a-form-model
          ref="ruleForm"
          layout="vertical"
          :model="form"
          :rules="rules"
          @submit="handleSubmit"
          @submit.native.prevent
        >
          <a-form-model-item ref="name" prop="name">
            <a-input
              style="margin-top:15px;"
              v-model="form.name"
              placeholder="Username"
              @blur="
                () => {
                  $refs.name.onFieldBlur();
                }
              "
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item ref="password" prop="password">
            <a-input
              style="margin-top:5px;"
              v-model="form.password"
              type="password"
              @blur="
                () => {
                  $refs.password.onFieldBlur();
                }
              "
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item>
            <a-button type="primary" html-type="submit" block>
              Log in
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "Hello ",
        password: "12345ff"
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input  username",
            trigger: "blur"
          },
          {
            min: 5,
            max: 15,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please input  password",
            trigger: "blur"
          },
          {
            min: 5,
            max: 13,
            message: "Length should be 5 to 13",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$store.commit("setAuthentication", true);
          this.$router.replace({ name: "Home" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  },
  ...mapActions("auth", ["sayMyWord", "setAuth"])
};
</script>
<style scoped>
.ant-form-item {
  margin-bottom: 10px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-login {
  text-align: center;
}
.ant-card {
  margin-top: 15px;
}
.ant-btn {
  float: right;
}
</style>
