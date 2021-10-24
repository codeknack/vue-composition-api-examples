<template>
  <div v-if="error">
    <h2>Error: {{ error }}</h2>
  </div>
  <div v-if="loading">
    <h2>Loading data...</h2>
  </div>
  <slot :data="data"></slot>
</template>

<script>
import { useFetch } from '../composables/useFetch.js';

export default {
  props: ['url'],
  setup(props) {
    const {data, error, loading} = useFetch(
      props.url,
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