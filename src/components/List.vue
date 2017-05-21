<template>
    <div>
        <ul class="list-group">
            <li v-for="movie in movies" class="list-group-item">
                <span>{{ movie.title }}</span>
                <span class="pull-right delete-btn" @click="deleteMovie(movie._id)">X</span>
            </li>
        </ul>
    </div>
</template>

<script>
    const constants = require('../helpers').default.constants;

    export default {
        props: [ 'movies' ],
        methods: {
            deleteMovie(id) {
                this.$http.delete(constants.endpoint + '/' + id).then(response => {
                    this.$emit('movieDeleted', response.data);
                });
            }
        }
    }
</script>

<style>
    .delete-btn {
        cursor: pointer;
    }
</style>