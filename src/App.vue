<template>
  <div class="container">
    <AddTodo></AddTodo>
    <FilterTodo />
    <Todos> </Todos>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo.vue";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodo,
  },
};
</script>

<style>
body {
  font-family: "Franklin Ghotic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  overflow: auto;
  padding: 0 2rem;
  margin: auto;
}
</style>
