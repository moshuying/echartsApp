<template>
    <div class="Line">
        <div id="chart1" class="chart"></div>
        <div id="chart2" class="chart"></div>
        <div id="chart3" class="chart"></div>
    </div>
</template>

<script>
    import 'echarts/theme/macarons'
    export default {
        name: "Line",
        data(){
            return{

            }
        },
        mounted(){
            this.drawLine();
            this.drawLine2();
            this.drawLine3();
        },
        methods:{
            drawLine(){
                let chart1=this.$echarts.init(document.getElementById('chart1'),'macarons');
                let data2=[120, 132, 101, 134, 90, 230, 210];
                chart1.setOption({
                    tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                grid: {
                    left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        data2,
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
            },
            drawLine2(){
                let base = +new Date(1968, 9, 3);
                let oneDay = 24 * 3600 * 1000;
                let date = [];

                let data = [Math.random() * 300];

                for (let i = 1; i < 20000; i++) {
                    let now = new Date(base += oneDay);
                    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
                }
                let chart2=this.$echarts.init(document.getElementById('chart2'),'macarons');
                chart2.setOption({
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    title: {
                        left: 'center',
                        text: '大数据量面积图',
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: date
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 10
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    series: [
                        {
                            name:'模拟数据',
                            type:'line',
                            smooth:true,
                            symbol: 'none',
                            sampling: 'average',
                            itemStyle: {
                                color: 'rgb(255, 70, 131)'
                            },
                            areaStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }])
                            },
                            data: data
                        }
                    ]
                });
            },
            drawLine3(){
                let chart3=this.$echarts.init(document.getElementById('chart3'),'macarons');
                let timer=new Date().getTime().toString();
                this.$axios({
                    headers:{
                        'Host': 'www.echartsjs.com',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0',
                        'Accept': '*/*',
                        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Referer': 'https://www.echartsjs.com/examples/editor.html?c=line-aqi',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Connection': 'keep-alive',
                        },
                        method:"get",
                        url:"https://www.echartsjs.com/examples/data/asset/data/aqi-beijing.json?="+timer,
                    })
                    .then(function (res) {

                        alert(res.data[0]);
                    })
                    .andThen((res) => {
                      alert()
                    });

            }
        }
    }
</script>

<style scoped lang="scss">
.chart{
    width: 100%;
    height: 600px;
}
</style>