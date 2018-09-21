import React, { Component }from 'react';
import { BarChart } from 'react-easy-chart';



class HVACData extends Component {
  render() {
    let hvac = this.props.HVAC;
    let test = hvac.map((item, index) => {
      return [
        { x: `${index + 1}, Cold`, y: item.acCounter },
        { x: `${index + 1}, Heat`, y: item.heatCounter }
      ]
      // reduce result into one array of objects
    }).reduce((a, b) => a.concat(b), [])

    return (
      <div>
        <p>HVAC Data</p>
        <BarChart
          axisLabels={{x: 'Day of the Month', y: 'My y Axis'}}
          axes
          colorBars
          yTickNumber={3}
          width={1600}
          height={600}
          margin={{top: 10, right: 0, bottom: 30, left: 100}}
          data={
            test.map(item => {
              return item;
            })
          }
        />
      </div>
    );
  }
}

export default HVACData;