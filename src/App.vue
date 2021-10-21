<template>
  <div id="app">
    <universal-list url="https://jsonplaceholder.typicode.com/todos" v-slot="{ data }">
      <h2>Todos</h2>
      <ol>
        <li v-for="item in data" :key="item.id"> {{ item.title }} - {{ item.completed }} </li>
      </ol>
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