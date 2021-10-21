<template>
  <div v-if="error">
    <h2>Erorr: {{ error }}</h2>
  </div>
  <div v-if="loading"><h2>Fetching Data!</h2></div>
  <h2>Users</h2>
  <ul v-for="item in data" :key="item.id">
    <li><b>Name:</b> {{ item.name }} </li>
    <li><b>Username:</b> {{ item.username}} </li>
  </ul>
</template>

<script>
import { useFetch } from '../composables/useFetch.js';

export default {
  setup() {
    const {data, error, loading} = useFetch(
      'https://jsonplaceholder.typicode.com/users',
      {}
    );
   
    return {
      data,
      error,
      loading
    };
  }
};
</script> 

<style scoped>
  ul {
    list-style-type: none;
  }
</style>