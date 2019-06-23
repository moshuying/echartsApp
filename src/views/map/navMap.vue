<template>
    <div class="home">
        <v-gaode></v-gaode>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import gaode from '../../components/map/gaode.vue'; // @ is an alias to /src

    @Component({
        components: {
            'v-gaode':gaode
        },
    })
    export default class Home extends Vue {}
</script>
