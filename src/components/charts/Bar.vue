<template>
  <div class="Bar">
    <div id="chart1" class="chart"></div>
    <div id="chart2" class="chart"></div>
    <h1>南丁格尔玫瑰图</h1>
    <div id="chart3" class="chart"></div>
    <div id="chart4" class="chart"></div>
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
      this.drawLine3();
      this.drawLine4();
      this.drawLine5();
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
      },
      drawLine3(){
        let chart3=this.$echarts.init(document.getElementById('chart3'));
        chart3.setOption({
          title: {
            text: '南丁格尔玫瑰图'
            , subtext: '纯属虚构'
            , x: 'center'
          }
          ,tooltip:{
            x:'center'
            ,y:'bottom'
            ,data:['rose','rose1','rose3']
          },toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {
                show: true,
                type: ['pie', 'funnel']
              },
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          series : [
            {
              name:'半径模式',
              type:'pie',
              radius : [20, 110],
              center : ['25%', '50%'],
              roseType : 'radius',
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
              ]
            },
            {
              name:'面积模式',
              type:'pie',
              radius : [30, 110],
              center : ['75%', '50%'],
              roseType : 'area',
              data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
              ]
            }
          ]
        });
      },
      drawLine4(){
        let chart4 = this.$echarts.init(document.getElementById('chart4'),'macarons');
        chart4.setOption({
            legend: {},
            tooltip: {},
            dataset: {
              // 提供一份数据。
              source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
              ]
            },
            // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
            xAxis: {type: 'category'},
            // 声明一个 Y 轴，数值轴。
            yAxis: {},
            // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
            series: [
              {type: 'bar'},
              {type: 'bar'},
              {type: 'bar'}
            ]
        });
      },
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