<template>
    <div class="home">
        <v-header></v-header>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import header from '../../components/header.vue';

    @Component({
        components: {
            'v-header':header
        },
    })
    export default class Home extends Vue {}
</script>
