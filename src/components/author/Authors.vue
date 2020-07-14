<template>
  <div>
    <div>
      <a-button
        style="float:right"
        type="primary"
        htmlType="submit"
        @click="onSubmit"
      >
        Add
      </a-button>
    </div>

    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 50 }"
      :scroll="{ y: 440 }"
      style="margin-top: 10px"
    />
  </div>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150
  },
  {
    title: "English Name",
    dataIndex: "eng_name",
    width: 150
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    eng_name: 32,
    address: `London, Park Lane no. ${i}`
  });
}

export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods: {
    handleAdd() {
      console.log("Added");
    },
    onClick() {
      console.log("Clicked Me");
    },
    onSubmit() {
      console.log("onSubmit Worked");
    }
  }
};
</script>

<style></style>
