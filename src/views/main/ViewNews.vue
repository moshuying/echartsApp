<template>
    <div class="News">
        <h1>News的视窗</h1>
        <v-News></v-News>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import News from '../../components/main/News.vue';

    @Component({
        components: {
            'v-News':News,
        },
    })
    export default class Home extends Vue {}
</script>
