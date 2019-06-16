<template>
  <div class="Bar">
    <div id="chart1" class="chart"></div>
    <div id="chart2" class="chart"></div>
  </div>
</template>

<script>
  import 'echarts/theme/macarons'
  import echarts from 'echarts'
  export default {
    name: "Bar",
    data() {
      return {}
    },
    mounted() {
      this.drawLine();
      this.drawLine2();
    },
    methods:{
      drawLine(){
        let xAxisData = [];
        let data1 = [];
        let data2 = [];
        for (let i = 0; i < 100; i++) {
          xAxisData.push('类目' + i);
          data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
          data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }
        let chart1=this.$echarts.init(document.getElementById('chart1'),'macarons');
        chart1.setOption({
                  title: {
                    text: '柱状图动画延迟'
                  },
                  legend: {
                    data: ['bar', 'bar2'],
                    align: 'left'
                  },
                  toolbox: {
                    // y: 'bottom',
                    feature: {
                      magicType: {
                        type: ['stack', 'tiled']
                      },
                      dataView: {},
                      saveAsImage: {
                        pixelRatio: 2
                      }
                    }
                  },
                  tooltip: {},
                  xAxis: {
                    data: xAxisData,
                    silent: false,
                    splitLine: {
                      show: false
                    }
                  },
                  yAxis: {
                  },
                  series: [{
                    name: 'bar',
                    type: 'bar',
                    data: data1,
                    animationDelay: function (idx) {
                      return idx * 10;
                    }
                  }, {
                    name: 'bar2',
                    type: 'bar',
                    data: data2,
                    animationDelay: function (idx) {
                      return idx * 10 + 100;
                    }
                  }],
                  animationEasing: 'elasticOut',
                  animationDelayUpdate: function (idx) {
                    return idx * 5;
                  }
                }
        )
      },
      drawLine2(){
        function generateData(count) {
          let baseValue = Math.random() * 1000;
          let time = +new Date(2011, 0, 1);
          let smallBaseValue;

          function next(idx) {
            smallBaseValue = idx % 30 === 0
                    ? Math.random() * 700
                    : (smallBaseValue + Math.random() * 500 - 250);
            baseValue += Math.random() * 20 - 10;
            return Math.max(
                    0,
                    Math.round(baseValue + smallBaseValue) + 3000
            );
          }

          let categoryData = [];
          let valueData = [];

          for (let i = 0; i < count; i++) {
            categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
            valueData.push(next(i).toFixed(2));
            time += 1000;
          }

          return {
            categoryData: categoryData,
            valueData: valueData
          };
        }
        let dataCount = 5e5;
        let data = generateData(dataCount);
        let chart2 = echarts.init(document.getElementById('chart2'),'macarons');
        chart2.setOption({
          title: {
            text: echarts.format.addCommas(dataCount) + ' Data',
            left: 10
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: false
              },
              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            bottom: 90
          },
          dataZoom: [{
            type: 'inside'
          }, {
            type: 'slider'
          }],
          xAxis: {
            data: data.categoryData,
            silent: false,
            splitLine: {
              show: false
            },
            splitArea: {
              show: false
            }
          },
          yAxis: {
            splitArea: {
              show: false
            }
          },
          series: [{
            type: 'bar',
            data: data.valueData,
            // Set `large` for large data amount
            large: true
          }]
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .Bar{
    .chart{
      width: 90%;
      height: 600px;
      margin: 2rem auto;
    }
  }
</style>