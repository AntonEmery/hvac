import React, { Component }from 'react';
import { BarChart } from 'react-easy-chart';



class HVACData extends Component {
  render() {
    return (
      <div>
        <p>HVAC Data</p>
        <BarChart
          axes
          colorBars
          width={250}
          height={400}
          data={[
            {x: 'Max', y: 10},
            {x: 'Min', y: 5}
          ]}
        />
      </div>
    );
  }
}

export default HVACData;