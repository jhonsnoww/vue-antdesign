<template>
  <div>
    <div>
      <a-button
        style="float:right"
        type="primary"
        htmlType="submit"
        @click="showModal"
        shape="circle"
      >
        <a-icon type="plus" />
      </a-button>
      <br />
      <a-modal
        v-model="visible"
        title="Create Genre"
        @ok="handleOk"
        okText="Create"
      >
        <CreateGenreForm></CreateGenreForm>
      </a-modal>
    </div>
    <br />

    <a-list item-layout="horizontal" :data-source="genres">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <a slot="title">{{ item.title }}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import CreateGenreForm from "@/components/CreateGenreForm.vue";

export default {
  components: {
    CreateGenreForm
  },
  data() {
    return {
      genres: [],
      visible: false
    };
  },
  created() {
    this.genres = this.$store.getters.genres;
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.$store.dispatch("pushGenre");
      this.visible = false;
    }
  }
};
</script>
<style></style>
