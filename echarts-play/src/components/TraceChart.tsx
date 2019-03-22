import ReactEcharts, { ObjectMap } from 'echarts-for-react';
import * as React from 'react';
import { Component } from 'react';
import { Card, H5 } from '@blueprintjs/core';

class TraceChart extends Component {
  public render() {
    return <ReactEcharts option={this.getOption()} />;
  }

  private getOption(): ObjectMap {
    return {
      dataZoom: [
        {
          end: 100,
          handleIcon:
            'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,' +
            '8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          show: true,
          showDataShadow: false,
          start: 0,
          type: 'slider'
        },
        {
          type: 'inside',
          start: 0,
          end: 100
        }
      ],
      grid: {
        bottom: '3%',
        containLabel: true,
        left: '3%',
        right: '4%'
      },
      series: [
        {
          data: [],
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
        type: 'time'
      },
      yAxis: {
        max: 1,
        min: 0,
        scale: true,
        show: false,
        silent: true,
        splitNumber: 0,
        type: 'value'
      }
    };
  }
}

export default TraceChart;
