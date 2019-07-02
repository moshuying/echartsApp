<template>
    <div id="nav">
        <ul>
<!--            主页-->
            <li><router-link to="/">
                <span class="iconfont icon-zhunbeiliangchan  ">
                    <a href="">主页</a>
                </span>
            </router-link></li>
            <!--新闻-->
            <li><router-link to="/News">
                <span class="iconfont icon-gongdanqueren  ">
                    <a href="">新闻</a>
                </span>
            </router-link></li>
<!--            搜索-->
            <li><router-link to="/Rake">
                <span class="iconfont icon-sousuofangda  ">
                    <a href="">搜索</a>
                </span>
            </router-link></li>
<!--            用户-->
            <li><router-link to="/User">
                <span class="iconfont icon-guangbo  ">
                    <a href="">我的信息</a>
                </span>
            </router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped lang="scss">
a{
    text-decoration: none;
}
#nav{
    margin: 0;
    padding: 0;
    width: 100%;
    position: fixed;
    bottom: 0;
}
ul{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    li{
        background-color: #eeeeee;
        width: 25%;
        height: 2.8rem;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #cccccc;
        box-shadow: 3px 0px 3px #aaa;
        border-left: 1px solid #eeeeee;
        a{
            &:hover{
                span{
                    color: #cccccc;
                }
                background-color: white;
            }
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 0.1rem;
            span{
                height: 100%;
                width: 100%;
                font-size: 1.5rem;
                a{
                    font-size: 0.6rem;
                }
            }
        }
    }
    li:first-child{
        border-left: none;
    }
}
</style>
