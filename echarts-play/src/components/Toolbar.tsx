import { ButtonGroup, AnchorButton, Tooltip } from '@blueprintjs/core';
import { Component } from 'react';
import * as React from 'react';

class Toolbar extends Component {
  public render() {
    const useLargeButtons: boolean = true;
    const hoverOpenDelay: number = 300;

    return (
      <div className="header">
        <div className="header-left">
          <ButtonGroup large={useLargeButtons}>
            <Tooltip
              content="Select channels to monitor"
              hoverOpenDelay={hoverOpenDelay}
            >
              <AnchorButton onClick={this.filterChannels} icon="filter-list" />
            </Tooltip>

            <Tooltip content="Filter by thread" hoverOpenDelay={hoverOpenDelay}>
              <AnchorButton onClick={this.filterThreads} icon="fork" />
            </Tooltip>
            <Tooltip content="Add a marker" hoverOpenDelay={hoverOpenDelay}>
              <AnchorButton onClick={this.addMarker} icon="map-marker" />
            </Tooltip>
            <Tooltip content="Add a comment" hoverOpenDelay={hoverOpenDelay}>
              <AnchorButton onClick={this.addComment} icon="comment" />
            </Tooltip>
            <Tooltip
              content="Import Trace data from file"
              hoverOpenDelay={hoverOpenDelay}
            >
              <AnchorButton onClick={this.importData} icon="import" />
            </Tooltip>
            <Tooltip
              content="Export Trace data to file"
              hoverOpenDelay={hoverOpenDelay}
            >
              <AnchorButton onClick={this.exportData} icon="export" />
            </Tooltip>
          </ButtonGroup>
        </div>
        <div className="header-right">
          <ButtonGroup large={useLargeButtons}>
            <Tooltip
              content={
                this.isOnline ? 'Pause data stream' : 'Resume data stream'
              }
              hoverOpenDelay={hoverOpenDelay}
            >
              <AnchorButton
                onClick={this.toggleRunning}
                icon={this.isOnline ? 'pause' : 'play'}
              />
            </Tooltip>
            <Tooltip content="Settings" hoverOpenDelay={hoverOpenDelay}>
              <AnchorButton onClick={this.editSettings} icon="settings" />
            </Tooltip>
          </ButtonGroup>
        </div>
      </div>
    );
  }

  private isOnline: boolean = false;

  private toggleRunning = () => {};

  private filterChannels = () => {};

  private filterThreads = () => {};

  private addMarker = () => {};

  private addComment = () => {};

  private importData = () => {};

  private exportData = () => {};

  private editSettings = () => {};
}

export default Toolbar;
