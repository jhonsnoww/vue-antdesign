<template>
  <div>
    <a-row :gutter="10" type="flex" justify="start">
      <a-col :span="4">
        <a-card
          hoverable
          style="background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,51,0.9391106784510679) 100%);color:#fff;text-align:center;"
        >
          <p>Books : 2000</p>
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card
          hoverable
          style="background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(186,15,102,0.9475140397956058) 50%, rgba(252,176,69,1) 100%);color:#fff; text-align:center; margin-top:10;"
        >
          <p>Authors : 120</p>
        </a-card>
      </a-col>
      <a-col :span="4">
        <a-card
          hoverable
          style="color:#fff;text-align:center; background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);"
        >
          <p>Genres : 40</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style scoped>
.ant-card-body {
  vertical-align: middle;
}
</style>
