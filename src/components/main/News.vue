<template>
    <div class="news">
        <v-appModel></v-appModel>
        <v-appModel></v-appModel>
        <v-appModel></v-appModel>
        <v-appModel></v-appModel>
        <v-appModel></v-appModel>
        <v-appModel></v-appModel>
        <v-appModel></v-appModel>

        <h1>News的组件</h1>
    </div>
</template>

<script lang="ts" >
    import { Component, Vue } from 'vue-property-decorator';
    import appModel from '../../components/appStore/appModel.vue';

    @Component({
        components: {
            'v-appModel':appModel,
        },
    })
    export default class Home extends Vue{

    }
</script>

<style scoped>

</style>
