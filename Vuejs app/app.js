const app = new Vue({
    el: '#app',
    data: {
      title: 'Anargha Ganguly Interview CRUD app',
      newTodo: '',
      todos: []
    },
    methods: {
      addTodo() {
        this.todos.push({
          title: this.newTodo,
          done: false
        });
        this.newTodo = '';
      },
      removeTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
      },
      allDone() {
        this.todos.forEach(todo => {
          todo.done = true;
        });
      }
    }
  });