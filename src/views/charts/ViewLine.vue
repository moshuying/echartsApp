<template>
  <div class="ViewLine">
    <v-Line></v-Line>
  </div>
</template>
<script lang="ts" >
  import { Component, Vue } from 'vue-property-decorator';
  import VLine from '../../components/charts/Line.vue'

  @Component({
    components:{
        'v-Line':VLine
      }
  })
  export default class Home extends Vue {}
</script>
