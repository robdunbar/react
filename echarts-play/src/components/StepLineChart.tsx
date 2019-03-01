import ReactEcharts from "echarts-for-react";
import * as React from "react";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

export default class StepLineChart extends React.PureComponent<IProps, object> {
  public data: [];
  public now: Date = new Date();
  public oneDay: number = 24 * 3600 * 1000;
  public value: number;

  const value = Math.random() * 1000;

  constructor(props: IProps) {
    super(props);

    for () { }
  }
  for(let i = 0; i < 1000; i++) {
  data.push(randomData());
}

  // Define
  public getOption = () => {
  const now = new Date();
  const value = Math.round(Math.random());

  const data = [
    {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        value
      ]
    },
    {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        value
      ]
    }
  ];
  data.push();
  return {
    title: {
      text: 'Task 1'
    },
    tooltip: {
      trigger: 'axis'
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
      type: 'time',
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Step Start',
        type: 'line',
        step: 'start',
        data
      }
    ]
  };
};

  // We explicitly include the return type
  public render(): React.ReactNode {
  return (
    <div>
      <ReactEcharts
        option={this.getOption()}
        style={{ height: '350px', width: '100%' }}
        className='react_for_echarts' />
    </div>
  );
}
}
