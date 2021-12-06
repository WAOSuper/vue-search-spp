<template>
  <input v-on:input='onInput' placeholder="search something">
</template>

<script>
function debounce(func, wait = 500, immediate) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      search: "search/search"
    }),
    onInput(e) {
      debounce(this.search(e.target.value));
    }
  }
};
</script>
