<template>
    <div class="User">
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
