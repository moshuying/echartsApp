<template>
    <div class="header">
        <div class="home-nav">
            <div class="page-type">爬虫</div>
            <div class="page-type">大数据可视化</div>
            <div class="page-type"></div>
            <div class="page-type">暂定</div>
        </div>
        <ul style="display: none;">
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
</template>
<script>
    export default {
        name: "header"
    }
</script>
<style scoped lang="scss">
    ul{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 2rem;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            width: 33.33333333%;
            border-bottom: 1px solid #555555;
            a{
                text-decoration: none;
            }
        }
    }
</style>
