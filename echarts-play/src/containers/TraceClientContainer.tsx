import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import * as React from 'react';
import { Component } from 'react';
import MarkerInterval from '../components/MarkerInterval';
import Timeline from '../components/Timeline';
import Toolbar from '../components/Toolbar';
import TraceOverview from '../components/TraceOverview';
import { isNullOrUndefined } from 'util';

class TraceClientContainer extends Component {
  public render() {
    return (
      <div className="container">
        <Toolbar />
        <TraceOverview />
        <Timeline />
        <MarkerInterval />
      </div>
    );
  }
}

export default TraceClientContainer;
