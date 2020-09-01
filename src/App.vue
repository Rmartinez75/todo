<template>
  <div id="app">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item md-size-50 todo-container">
        <md-card>
          <md-card-content>
            <md-card-header class="center-content">
              <h1>toDo</h1>
            </md-card-header>

            <md-field>
              <md-input
                class="font"
                v-model="currentTodo"
                @keydown.enter="addTodo()"
                placeholder="Add a toDo"
              />
              <button class="hover" @click="addTodo()">
                <md-icon>add</md-icon>
              </button>
            </md-field>
            <div class="center-content">
              <ul class="todos">
                <li v-for="todo in todos" :key="todo.id">
                  <span class="todo-font-size">
                    <br />
                    --{{ todo.label }}--
                  </span>
                  <br />
                  <span>
                    <input class="hover" type="checkbox" />Completed
                  </span>
                  <br />
                  <span class="hover" @click="removeTodo(todo)">
                    <md-icon>delete_forever</md-icon>Delete
                  </span>
                </li>
              </ul>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item"></div>
    </div>
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
    clickToEdit(todo) {
      this.editTodoId = todo.id;
    },
    saveEdit() {
      this.editTodoId = null;
    },
  },
};
</script>

<style>
html {
  color: rgb(207, 211, 211);
  font-family: "Architects Daughter", cursive;
}
.center-content {
  justify-content: center;
  text-align: center;
  font-family: "Architects Daughter", cursive;
}
ul {
  list-style-type: none;
  font-family: "Architects Daughter", cursive;
  font-size: 135%;
}
.hover:hover {
  cursor: pointer;
}
button {
  background-color: transparent;
  font-family: "Architects Daughter", cursive;
}
.font {
  font-family: "Quicksand", sans-serif;
}
h1 {
  font-family: "Architects Daughter", cursive;
  font-size: 350%;
}
.md-field input::placeholder {
  font-family: "Architects Daughter", cursive;
}
.md-input input::placeholder {
  font-family: "Architects Daughter", cursive;
}
.todo-font-size {
  font-size: 180%;
}
</style>
