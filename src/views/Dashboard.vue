<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logos" v-if="collapsed">
        <img width="30px" src="@/assets/logos.png" alt="logo" />
      </div>
      <div v-else class="logos">
        <img width="120px" src="@/assets/logotext.png" alt="logo" />
      </div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <router-link to="/home">
            <a-icon type="dashboard" /> <span>Dashboard</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="book" /><span>Books</span></span>
          <a-menu-item key="3">
            <router-link to="/create">
              <a-icon type="plus-circle" />
              <span>New Book</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/books">
              <a-icon type="database" />
              <span>Book List</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <router-link to="/authors">
            <a-icon type="smile" /> <span>Authors</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <router-link to="/genres">
            <a-icon type="project" />
            <span>Genres</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div style="float:right;text-align:center;margin-right:30px;">
          <a-button type="danger" shape="circle">
            <a-icon type="logout" />
          </a-button>
        </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>{{ this.$route.name }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '90%' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style>
#components-layout-demo-side .logos {
  margin: 16px;
  text-align: center;
  display: block;
}
</style>
