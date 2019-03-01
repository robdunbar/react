import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import StepLineChart from './components/StepLineChart';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Hello name="Rob" level={4} />
        <StepLineChart />
      </div>
    );
  }
}

export default App;
