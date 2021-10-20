<template>
  <div id="app">
    <user-list />
  </div>
</template>

<script>
import UserList from "./components/UserList";

export default {
  name: "App",
  components: {
    UserList
  }
};
</script>