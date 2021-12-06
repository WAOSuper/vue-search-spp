<template>
  <div>
   <ul v-if='searchResults.length'>
     <li v-for='(item,index) in searchResults' :key='index'>{{item.title}}</li>
   </ul>
     <div v-else>No results found</div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      searchResults: "search/getSearchResults"
    })
  }
};
</script>