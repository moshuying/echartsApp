<template>
    <div class="User">
        <h1>User的视窗</h1>
        <v-User></v-User>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import User from '../../components/main/User.vue'

    @Component({
        components: {
            'v-User':User
        },
    })
    export default class Home extends Vue {}
</script>
