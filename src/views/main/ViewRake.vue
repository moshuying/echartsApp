<template>
    <div class="home">
        <v-Rake></v-Rake>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Rake from '../../components/main/Rake.vue'

    @Component({
        components: {
            'v-Rake':Rake
        },
    })
    export default class Home extends Vue {}
</script>
