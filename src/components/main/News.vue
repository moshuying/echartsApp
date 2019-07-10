<template>
    <h1>News的组件</h1>
    <appModel></appModel>
</template>

<script lang="ts" >
    import { Component, Vue } from 'vue-property-decorator';
    import appModel from '../appStore/appModel';
    
    @Component({
        components: {
            'appModel':appModel,
        },
    })
    export default class Home extends Vue{

    }
</script>

<style scoped>

</style>
