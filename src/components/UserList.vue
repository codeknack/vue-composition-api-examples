<template>
  <div v-if="error">
    <h2>Erorr: {{ error }}</h2>
  </div>
  <div v-if="loading"><h2>Fetching Data!</h2></div>
  <div v-for="item in data" :key="item.id">
    <ul>
      <li> {{ item.name }}</li>
      <li> {{ item.username}}</li>
    </ul>
  </div>
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