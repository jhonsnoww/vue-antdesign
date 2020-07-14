<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <router-link to="/home">
            <a-icon type="dashboard" theme="twoTone" /> <span>Dashboard</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="book" theme="twoTone" /><span>Books</span></span
          >
          <a-menu-item key="3">
            <router-link to="/create">
              <a-icon
                type="plus-circle"
                theme="twoTone"
                two-tone-color="#52c41a"
              />
              <span>New Book</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/books">
              <a-icon
                type="database"
                theme="twoTone"
                two-tone-color="#52c41a"
              />
              <span>Book List</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <router-link to="/authors">
            <a-icon type="smile" theme="twoTone" /> <span>Authors</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <router-link to="/genres">
            <a-icon type="project" theme="twoTone" />
            <span>Genres</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <!-- <a-breadcrumb-item>User</a-breadcrumb-item> -->
          <a-breadcrumb-item>{{ this.$route.name }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
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
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
