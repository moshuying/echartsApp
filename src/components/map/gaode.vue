<template>
<div class="gaodeMap">

</div>
</template>

<script>
    export default {
        name: "navMap"
        ,data(){
            return{}
        },mounted() {
            this.getGeolocation()
        },methods:{
            getGeolocation(){

            }
        }
    }
</script>

<style scoped>
.gaodeMap{
    width: 100%;
    height: 40rem;

}
</style>