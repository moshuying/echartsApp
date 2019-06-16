<template>
    <div class="home">
        <v-header></v-header>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
    import viewHeader from '../../components/public/v-header.vue';

    @Component({
        components: {
            'v-header':viewHeader
        },
    })
    export default class Home extends Vue {}
</script>
