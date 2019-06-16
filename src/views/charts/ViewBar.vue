<template>
  <div class="home">
    <v-Bar></v-Bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bar from '../../components/charts/Bar.vue'; // @ is an alias to /src

@Component({
  components: {
    'v-Bar':Bar
  },
})
export default class Home extends Vue {}
</script>
