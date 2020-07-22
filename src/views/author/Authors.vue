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
        title="Create Author"
        @ok="handleOk"
        okText="Create"
      >
        <CreateAuthorForm></CreateAuthorForm>
      </a-modal>
    </div>
    <br />

    <a-table :columns="columns" :data-source="authors" bordered>
      <template
        v-for="col in ['name', 'eng_name']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">Save</a>
            <a-popconfirm
              title="Sure to cancel?"
              @confirm="() => cancel(record.key)"
            >
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)"
              >Edit</a
            >
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
import CreateAuthorForm from "@/components/CreateAuthorForm.vue";
import { mapGetters } from "vuex";

const columns = [
  {
    title: "Myanmar Name",
    dataIndex: "name",
    width: "40%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Eng Name",
    dataIndex: "eng_name",
    width: "30%",
    scopedSlots: { customRender: "eng_name" }
  },
  {
    title: "Action",
    dataIndex: "operation",
    width: "30%",
    scopedSlots: { customRender: "operation" }
  }
];

export default {
  props: {},
  components: {
    CreateAuthorForm
  },
  data() {
    return {
      authors: [],
      columns,
      visible: false,
      editingKey: ""
    };
  },
  created() {
    this.authors = this.$store.getters.authors;
    this.cacheData = this.authors.map(item => ({ ...item }));
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.authors];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.authors = newData;
      }
    },
    edit(key) {
      const newData = [...this.authors];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.authors = newData;
      }
    },
    save(key) {
      const newData = [...this.authors];
      const newCacheData = [...this.cacheData];
      const target = newData.filter(item => key === item.key)[0];
      const targetCache = newCacheData.filter(item => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.authors = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }

      console.log(target.key); // index
      this.editingKey = "";
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = "";
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
    showModal() {
      console.log("ShowModal");
      this.visible = true;
    },
    handleOk() {
      this.$store.getters.authors.push({
        key: this.$store.getters.authors.length.toString(),
        name: this.$store.getters.form.name,
        eng_name: this.$store.getters.form.engName
      });
      this.visible = false;
      this.hello;
    },
    ...mapGetters("author", ["hello"])
  }
};
</script>

<style>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
