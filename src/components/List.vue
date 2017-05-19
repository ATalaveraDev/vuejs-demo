<template>
    <div>
        <ul class="list-group">
            <li v-for="book in books" class="list-group-item">{{ book.title }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [ 'books' ]
    }
</script>