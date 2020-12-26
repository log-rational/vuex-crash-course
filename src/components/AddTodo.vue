<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add todo.." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>
<script>
export default { name: "AddTodo" };
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: none;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #ffffff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      console.log("hello");
      e.preventDefault();
      this.addTodo(this.title);
    },
  },
};
</script>