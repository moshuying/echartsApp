<template>
    <div class="home">
<!--        <v-header></v-header>-->
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import viewHeader from '../../components/public/v-header.vue';
    import Bar from '../../components/charts/Bar.vue';
    import Line from '../../components/charts/Line.vue';
    import Pie from '../../components/charts/Pie.vue';
    @Component({
        components: {
            'v-header':viewHeader,
            'v-Bar':Bar,
            'v-Line':Line,
            'v-Pie':Pie
        },
    })
    export default class Home extends Vue {}
</script>
