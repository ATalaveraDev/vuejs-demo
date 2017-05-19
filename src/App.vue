<template>
  <div id="app">
    <div class="row">
      <div class="col-lg-6">
        <h2>List</h2>
        <demo-list :books="books"></demo-list>
      </div>
      <div class="col-lg-6">
        <h2>Form</h2>
        <demo-form @movieAdded="updateList"></demo-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
          books: {
              type: Array
          }
      }
  },
  beforeMount() {
      this.$http.get('http://localhost:8081/movies').then(response => {
          this.books = response.data;
      });
  },
  methods: {
      updateList(event) {
          this.books.push(event);
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
