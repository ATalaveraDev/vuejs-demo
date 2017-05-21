<template>
    <div>
        <form novalidate>
            <div class="row">
                <div class="form-group col-lg-4">
                    <input type="text" class="form-control" placeholder="Status" v-model="movie.status">
                </div>
                <div class="form-group col-lg-5">
                    <input type="text" class="form-control" placeholder="Title" v-model="movie.title">
                </div>
                <div class="form-group col-lg-3">
                    <button type="button" class="btn btn-danger" @click="addMovie">OK</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    const helpers = require('../helpers').default;

    export default {
        data() {
            return {
                movie: helpers.movie()
            }
        },
        methods: {
            addMovie() {
                this.$http.post(helpers.constants.endpoint, this.movie).then(response => {
                    this.$emit('movieAdded', response.data);
                    this.movie = helpers.movie()
                });
            }
        }
    }
</script>
