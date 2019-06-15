<template>
  <div class="ViewLine">
    <v-Line></v-Line>
    <h1>Line的视窗</h1>
  </div>
</template>
<script lang="ts" >
  import { Component, Vue } from 'vue-property-decorator';
  import Line from '../components/Line.vue'

  @Component({
    components:{
        'v-Line':Line
      }
  })
  export default class Home extends Vue {}
</script>
