<template>
    <div id="app">
        <div class="row">
            <div class="col-lg-6">
                <h2>List</h2>
                <demo-list :movies="movies" @movieDeleted="updateList('delete', $event)"></demo-list>
            </div>
            <div class="col-lg-6">
                <h2>Form</h2>
                <demo-form @movieAdded="updateList('add', $event)"></demo-form>
            </div>
        </div>
    </div>
</template>

<script>
    const constants = require('./helpers').default.constants;

    export default {
        data() {
            return {
                movies: {
                    type: Array
                }
            }
        },
        beforeMount() {
            this.$http.get(constants.endpoint).then(response => {
                this.movies = response.data;
            });
        },
        methods: {
            updateList(action, movie) {
                if (action === 'add') {
                    this.movies.push(movie);
                } else {
                    this.movies = this.movies.filter(element => {
                        return element._id !== movie._id;
                    });
                }
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
