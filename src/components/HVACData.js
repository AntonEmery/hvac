import React, { Component }from 'react';
import { BarChart } from 'react-easy-chart';



class HVACData extends Component {
  render() {
    let hvac = this.props.HVAC;
    let test = hvac.map((item, index) => {
      return [
        { x: index + 1, y: item.acCounter },
        { x: index + 1, y: item.heatCounter }
      ]
      // reduce result into one array of objects
    }).reduce((a, b) => a.concat(b), [])

    return (
      <div>
        <p>HVAC Data</p>
        <BarChart
          axes
          colorBars
          width={800}
          height={400}
          data={
            test.map(item => {
              console.log(item)
              return item;
            })
          }
        />
      </div>
    );
  }
}

export default HVACData;