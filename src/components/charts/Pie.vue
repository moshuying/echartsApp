<template>
    <div class="Bar">
        <div id="chart1" class="chart"></div>
    </div>
</template>

<script>
    import 'echarts/theme/macarons'
    import echarts from 'echarts'
    export default {
        name: "Pie",
        data() {
            return {}
        },
        mounted() {
            this.drawLine();
        },
        methods:{
            drawLine(){
                app.title = '柱状图框选';
                let xAxisData = [];
                let data1 = [];
                let data2 = [];
                let data3 = [];
                let data4 = [];
                for (let i = 0; i < 10; i++) {
                    xAxisData.push('Class' + i);
                    data1.push((Math.random() * 2).toFixed(2));
                    data2.push(-Math.random().toFixed(2));
                    data3.push((Math.random() * 5).toFixed(2));
                    data4.push((Math.random() + 0.3).toFixed(2));
                }
                let itemStyle = {
                    normal: {
                    },
                    emphasis: {
                        barBorderWidth: 1,
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0,0,0,0.5)'
                    }
                };
                let chart1=this.$echarts.init(document.getElementById('chart1'),this.$Global.mac);
                chart1.setOption({
                        backgroundColor: '#eee',
                        legend: {
                            data: ['bar', 'bar2', 'bar3', 'bar4'],
                            align: 'left',
                            left: 10
                        },
                        brush: {
                            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                            xAxisIndex: 0
                        },
                        toolbox: {
                            feature: {
                                magicType: {
                                    type: ['stack', 'tiled']
                                },
                                dataView: {}
                            }
                        },
                        tooltip: {},
                        xAxis: {
                            data: xAxisData,
                            name: 'X Axis',
                            silent: false,
                            axisLine: {onZero: true},
                            splitLine: {show: false},
                            splitArea: {show: false}
                        },
                        yAxis: {
                            inverse: true,
                            splitArea: {show: false}
                        },
                        grid: {
                            left: 100
                        },
                        visualMap: {
                            type: 'continuous',
                            dimension: 1,
                            text: ['High', 'Low'],
                            inverse: true,
                            itemHeight: 200,
                            calculable: true,
                            min: -2,
                            max: 6,
                            top: 60,
                            left: 10,
                            inRange: {
                                colorLightness: [0.4, 0.8]
                            },
                            outOfRange: {
                                color: '#bbb'
                            },
                            controller: {
                                inRange: {
                                    color: '#2f4554'
                                }
                            }
                        },
                        series: [
                            {
                                name: 'bar',
                                type: 'bar',
                                stack: 'one',
                                itemStyle: itemStyle,
                                data: data1
                            },
                            {
                                name: 'bar2',
                                type: 'bar',
                                stack: 'one',
                                itemStyle: itemStyle,
                                data: data2
                            },
                            {
                                name: 'bar3',
                                type: 'bar',
                                stack: 'two',
                                itemStyle: itemStyle,
                                data: data3
                            },
                            {
                                name: 'bar4',
                                type: 'bar',
                                stack: 'two',
                                itemStyle: itemStyle,
                                data: data4
                            }
                        ]
                    });

                chart1.on('brushSelected', renderBrushed);

                function renderBrushed(params) {
                    let brushed = [];
                    let brushComponent = params.batch[0];

                    for (let sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                        let rawIndices = brushComponent.selected[sIdx].dataIndex;
                        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
                    }

                    chart1.setOption({
                        title: {
                            backgroundColor: '#333',
                            text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
                            bottom: 0,
                            right: 0,
                            width: 100,
                            textStyle: {
                                fontSize: 12,
                                color: '#fff'
                            }
                        }
                    });
                }
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