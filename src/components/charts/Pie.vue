<template>
    <div class="Bar">
        <div id="chart2" class="chart"></div>
    </div>
</template>

<script>
    import 'echarts/theme/macarons'
    export default {
        name: "Pie",
        data() {
            return {}
        },
        mounted() {
            this.drawLine1();
        },
        methods:{
            drawLine1(){
                let chart2=this.$echarts.init(document.getElementById('chart2'));
                chart2.setOption({
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            data:[
                                {value:235, name:'视频广告'},
                                {value:274, name:'联盟广告'},
                                {value:310, name:'邮件营销'},
                                {value:335, name:'直接访问'},
                                {value:400, name:'搜索引擎'}
                            ]
                        }
                    ]
                });
            }
        }
    }
</script>

<style scoped lang="scss">
.Pie{
    .chart{
        width: 90%;
        height: 600px;
        margin: 2rem auto;
    }
}
</style>