<template>
  <div class="card" style="min-height: 100vh">
    <a-card>
      <div style="display:block;text-align:center;margin-bottom:25px;">
        <img width="140px" src="@/assets/LogoTextBlack.png" alt="" />
      </div>

      <a-form-model
        layout="vertical"
        :model="formInline"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" html-type="submit" block>
            <!-- :disabled="formInline.user === '' || formInline.password === ''" -->
            Log in
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log("haha");
      this.$store.commit("setAuthentication", true);
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>
<style scoped>
.ant-form {
  margin-top: 30;
}
.card {
  width: 25%;
  margin: auto;
}
.title-login {
  text-align: center;
  padding-bottom: 30px;
}
.ant-card {
  margin-top: 30px;
}
.ant-btn {
  float: right;
}
</style>
