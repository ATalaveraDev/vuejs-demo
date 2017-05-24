<template>
    <div>
        <span @click="changeStatus('previous')"><<</span> {{ status }} <span @click="changeStatus('next')">>></span>
        <ul class="list-group">
            <li v-for="movie in movies" v-if="status === movie.status || status === 'All'" class="list-group-item">
                <span>{{ movie.title }}</span>
                <span class="pull-right delete-btn" @click="deleteMovie(movie._id)">X</span>
            </li>
        </ul>
    </div>
</template>

<script>
    const constants = require('../helpers').default.constants;
    const renderingOptions = [
        'Pending',
        'Watched',
        'All'
    ];
    let index = 0;

    export default {
        data() {
            return {
                status: renderingOptions[index]
            }
        },
        props: [ 'movies' ],
        methods: {
            deleteMovie(id) {
                this.$http.delete(constants.endpoint + '/' + id).then(response => {
                    this.$emit('movieDeleted', response.data);
                });
            },
            changeStatus(direction) {
                if (direction === 'next') {
                    if (index + 1 < renderingOptions.length) {
                        index = index + 1;
                        this.status = renderingOptions[index];
                    }
                } else {
                    if (index - 1 >= 0) {
                        index = index - 1;
                        this.status = renderingOptions[index];
                    }
                }
            }
        }
    }
</script>

<style>
    .delete-btn {
        cursor: pointer;
    }
</style>