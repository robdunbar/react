import ReactEcharts, { ObjectMap } from 'echarts-for-react';
import * as React from 'react';
import { Component } from 'react';

class TraceChart extends Component {
  taskAData: any;
  timeData: any;

  constructor(props) {
    super(props);
  }

  public render() {
    return <ReactEcharts option={this.getOption()} />;
  }

  private getOption(): ObjectMap {
    let now: Date = new Date();
    this.timeData = [
      new Date(now.getTime() + 1000).getTime(),
      new Date(now.getTime() + 2000).getTime(),
      new Date(now.getTime() + 3000).getTime(),
      new Date(now.getTime() + 4000).getTime(),
      new Date(now.getTime() + 5000).getTime()
    ];

    this.taskAData = [1, 0, 1, 0, 1];

    return {
      dataZoom: [
        {
          showDataShadow: false,
          type: 'slider'
        },
        {
          type: 'inside'
        }
      ],
      grid: {
        bottom: 90
      },
      series: [
        {
          data: this.taskAData,
          name: 'TaskA',
          step: 'start',
          type: 'line'
        }
      ],
      tooltip: {
        axisPointer: {
          axis: 'x',
          label: {
            formatter(params: { value: number }) {
              return new Date(params.value).toISOString();
            }
          }
        },
        trigger: 'axis'
      },
      xAxis: {
        show: false,
        type: 'time',
        data: this.timeData
      },
      yAxis: {
        max: 1,
        min: 0,
        scale: false,
        show: false,
        silent: true,
        splitNumber: 0,
        type: 'value'
      }
    };
  }
}

export default TraceChart;
