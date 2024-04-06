// 柱状图组件
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

// 1. 把功能代码放在组件中
// 2. 可变部分抽象成prop参数

const BarChart = ({ title, xAxis }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    // 保证dom可用，之后再进行图表渲染
    // 1. 获取渲染图表的dom节点
    const chartDom = chartRef.current
    // 2. 图表初始化，生成一个图表实例对象
    const myChart = echarts.init(chartDom);

    // 3. 准备图表参数
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: xAxis
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [10, 40, 70],
          type: 'bar'
        }
      ]
    };
    // 4. 使用图表参数，完成图表渲染
    option && myChart.setOption(option);
  }, [])

  return <div ref={chartRef} style={{width: '500px', height: '400px'}}></div>
};

export default BarChart;