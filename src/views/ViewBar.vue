<template>
  <div class="home">
    <h1>Bar的视窗</h1>
    <v-Bar></v-Bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bar from '../components/Bar.vue'; // @ is an alias to /src

@Component({
  components: {
    'v-Bar':Bar
  },
})
export default class Home extends Vue {}
</script>
