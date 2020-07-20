<template>
  <a-list item-layout="horizontal" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta>
        <!-- description="Ant Design, a design language for background applications, is refined by Ant UED Team" -->

        <a slot="title">{{ item.title }}</a>
        <!-- <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        /> -->
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
const data = [
  {
    title: "Biography"
  },
  {
    title: "Essay"
  },
  {
    title: "Memoir"
  },
  {
    title: "Comic fantasy"
  }
];
export default {
  data() {
    return {
      data
    };
  }
};
</script>
<style></style>
