<template>
  <div id="app">
    <universal-list url="https://jsonplaceholder.typicode.com/todos" v-slot="{ data }">
      <div v-for="item in data" :key="item.id">
        <ul>
          <li> {{ item.title }}</li>
          <li> {{ item.completed}}</li>
        </ul>
      </div>
    </universal-list>
  </div>
</template>

<script>
import UniversalList from "./components/UniversalList";

export default {
  name: "App",
  components: {
    UniversalList
  }
};
</script>