<template>
    <div class="News">
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
