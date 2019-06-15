<template>
  <div class="ViewLine">
    <v-Line></v-Line>
  </div>
</template>
<script lang="ts" >
  import { Component, Vue } from 'vue-property-decorator';
  import Line from '../../components/charts/Line.vue'

  @Component({
    components:{
        'v-Line':Line
      }
  })
  export default class Home extends Vue {}
</script>
