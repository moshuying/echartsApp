<template>
    <div class="home">
        <HelloWorld msg="Welcome to my Echarts App"/>
        <h1>test</h1>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/Bar.vue'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {}
</script>
