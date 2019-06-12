<template>
  <div class="ViewLine">
    <h1>ViewLine</h1>
    <Line></Line>
  </div>
</template>
<script lang="ts" >
  import { Component, Vue } from 'vue-property-decorator';
  import Line from '@/components/Line.vue'

  @Component({
    components:{
        Line,
      }
  })
  export default class Home extends Vue {}
</script>
