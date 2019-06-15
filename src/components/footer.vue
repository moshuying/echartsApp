<template>
    <div id="nav">
        <ul>
            <li>
<!--                <svg class="icon" aria-hidden="true">-->
<!--                    <use xlink:href="#icon-fangda"></use>-->
<!--                </svg>-->
                <router-link to="/Home">主页</router-link>
            </li>
            <li><router-link to="/News">新闻</router-link></li>
            <li><router-link to="/Rake">搜索</router-link></li>
            <li><router-link to="/User">用户</router-link></li>
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
    list-style-image: url("../static/images/图片1.png");
    li{
        width: 25%;
        height: 3.5rem;
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #eeeeee;
        border-left: 1px solid #eeeeee;
    }
    li:first-child{
        border-left: none;
    }
}
</style>