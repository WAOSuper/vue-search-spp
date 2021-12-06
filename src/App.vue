<template>
  <div>
    <Search />
    <Content />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Search from "./components/Search.vue";
import Content from "./components/Content.vue";

export default {
  name: "app",
  components: {
    Content,
    Search
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getFakeData: "search/getFakeData"
    })
  },
  created() {
    this.getFakeData();
  }
};
</script>

<style>
</style>
