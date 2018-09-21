import React, { Component }from 'react';
import { BarChart } from 'react-easy-chart';



class HVACData extends Component {
  render() {
    let hvac = this.props.HVAC;
    console.log(hvac)
    let data = hvac.map(item => {
      return { x: 'ac', y: 5 }
        // { x: 'heat', y: item.heatCounter }
    })

    console.log(data)
    return (
      <div>
        <p>HVAC Data</p>
        <BarChart
          axes
          colorBars
          width={800}
          height={400}
          data={
            data
          }
        />
      </div>
    );
  }
}

export default HVACData;