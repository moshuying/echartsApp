<template>
    <div class="v-header">
        <div class="home-nav">
            <div class="page-type">爬虫</div>
            <div class="page-type">大数据可视化
                <ul style="">
                    <li>
                        <router-link to="/Home/Line">Line</router-link>
                    </li>
                    <li>
                        <router-link to="/Home/Bar">Bar</router-link>
                    </li>
                    <li>
                        <router-link to="/Home/Pie">Pie</router-link>
                    </li>
                    <li>
                        <router-link to="/Home/navMap">navMap</router-link>
                    </li>
                </ul>
            </div>
            <div class="page-type">测试</div>
            <div class="page-type">测试</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "header"
    }
</script>
<style scoped lang="scss">
@import "../../static/scss/mixin.scss";
.v-header{
    width: 100%;
    @include Flex();
    .home-nav{
        width: 95%;
        height: 100%;
        @include Flex(space-between);
        .page-type{
            &:hover{
                ul{
                    display: block;
                }
            }
            ul{
                margin: 0;
                padding: 0;
                width: 100%;
                list-style-type: none;
                display: none;
                position: absolute;
                left: 0;
                li{
                    background-color: $vue-color;
                    a{
                        width: 100%;
                        text-align: center;
                    }
                    &:hover{
                        background-color: #cccccc;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
}
</style>
