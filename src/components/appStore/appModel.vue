<template>
<div class="appModel">
    <div class="logo"></div>
    <div class="name">
        <div class="appName">
            <p>元气骑士</p>
        </div>
        <div class="star"></div>
    </div>
    <div class="install">
        <p>安装</p>
    </div>
</div>
</template>
<script>
    export default {
        name: "appModel",
        props: [''],
        data() {
            return {}
        },
        compoents: {},
        computed: {},
        beforeMount() {
        },
        mounted() {
        },
        methods: {},
        watch: {}
    }
</script>
<style scoped lang="scss">
@import "../../static/scss/mixin.scss";
.appModel{
    padding: 1rem 0 0;
    width: 95%;
    margin: auto;
    @include Flex(space-between);
    .logo{
        width: 5rem;
        height: 5rem;
        background-image: url("../../static/images/元气骑士.png");
        background-size: cover;
    }
    .name{}
    .install{
        color: #3bd58b;
        p{
            padding: 0.3rem 1rem 0.3rem ;
            background-color: #dff8ec;
            border-radius: 6px;
        }
    }
}

</style>
