<template>
<div class="appModel">
    <div class="logo"></div>
    <div class="name">
        <div class="middle">
            <div class="appName">
                <span>元气骑士</span>
            </div>
            <div class="starAndSize">
                <div class="star fl">
                    <span class="star-percent" style="width: 80%"></span>
                </div>
                <div class="size">
                    <p>73MB</p>
                </div>
            </div>
            <div class="synopsis">
                <p>世界危在旦夕，时间处于剑与魔法afsdasdfasdf的时代，</p>
            </div>
        </div>
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
    width: 92%;
    margin: auto;
    @include Flex(space-between);
    .logo{
        min-width: 5rem;
        min-height: 5rem;
        background-image: url("../../static/images/元气骑士.png");
        background-size: cover;
    }
    .name{
        width: 100%;
        height: 100%;
        align-self: center;
        padding-left: 1rem;
        text-align: left;
        .middle{
            .appName{
                font-weight: 600;
            }
            .starAndSize{
                position: relative;
                left: -0.7rem;
                padding-top: 0.3rem;
                .star{
                    width: 116px;
                    height: 20px;
                    transform: scale(0.8);
                    vertical-align: top;
                    background-image: url("../../static/images/star-24.png");
                    background-position: 0 -144px;
                    .star-percent{
                        background-position: 0 -119px;
                        height: 20px;
                        display: inline-block;
                        background-image: url("../../static/images/star-24.png");
                        vertical-align: top;
                    }
                }
                .size{
                    height: 20px;
                    @include Flex(flex-end,flex-start,nowrap,column);
                }
            }
            .synopsis{
                padding-top: 0.3rem;
                max-width: 200px;
                p{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
    .install{
        min-width: 3.6rem;
        color: #3bd58b;
        p{
            padding: 0.1rem 0.7rem 0.1rem ;
            background-color: #dff8ec;
            border-radius: 6px;
        }
    }
}

</style>
