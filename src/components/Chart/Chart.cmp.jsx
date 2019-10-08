import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
// import '../../../node_modules/react-vis/d'
import './Chart.style.scss'

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';

const Chart=({marketPriceData})=> {
    console.log(marketPriceData.marketPriceData.values);
    
  const axisStyle = {
    ticks: {
      fontSize: '14px',
      color: '#333'
    },
    title: {
      fontSize: '16px',
      color: '#333'
    }
  };

  return (
    <div className="chart-container">
    <div className="chart">
    <h1>Rate for the last 5 days</h1>
    <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis
        hideLine
        title="X"
        labelFormat={v => `Value is ${v}`}
        labelValues={[2]}
        tickValues={[1, 1.5, 2, 3]}
        style={axisStyle}
        />
      <YAxis hideTicks />
      <LineSeries data={marketPriceData.marketPriceData.values} />
    </XYPlot>
        </div>
        </div>
  );
}

export default Chart