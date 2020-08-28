<template class="md-layout">
  <div class="md-layout-item">
    <md-field>
      <md-input
        class="center-content"
        v-model="currentTodo"
        @keydown.enter="addTodo()"
        placeholder="Add a todo"
      />
    </md-field>
    <div class="center-content">
      <span>Completed ToDo Delete</span>
    </div>
    <div class="md-layout-item">
      <ul class="center-content todos">
        <li v-for="todo in todos" :key="todo.id">
          <input type="checkbox" />
          {{ todo.label }}
        </li>
      </ul>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
    };
  },

  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].editing = !this.todos[index].editing;
    },
  },
};
</script>

<style>
.center-content {
  justify-content: center;
  text-align: center;
  align-items: center;
}
ul {
  list-style-type: none;
}
</style>
