<template>
    <h1 class="title"> UNa red. </h1>
    <search />
</template>
<script>
import search from '@src/components/component_search.vue';

export default {
    name: 'App',
    components: {
        search,
    }
}
</script>
<style>
.title {
    font-size: 48px;
    margin-top: 100px;
}
</style>