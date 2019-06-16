<template>
    <div class="home">
        <v-Pie></v-Pie>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Pie from '../../components/charts/Pie.vue';

    @Component({
        components: {
           'v-Pie':Pie
        },
    })
    export default class Home extends Vue {}
</script>
