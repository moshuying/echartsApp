<template>
    <div class="home">
        <v-Pie></v-Pie>
        <h1>Pie的视窗</h1>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Pie from '../components/Pie.vue';

    @Component({
        components: {
           'v-Pie':Pie
        },
    })
    export default class Home extends Vue {}
</script>
