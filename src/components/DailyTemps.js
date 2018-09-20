import React, { Component } from 'react';
import { BarChart } from 'react-easy-chart';


class DailyTemps extends Component {

  render() {
    const { tempHistory, units } = this.props;

    return (
      <div>
        <p>Avg Daily Temps</p>
        {/* wait until array populated to render graph */}
        {tempHistory.length > 0 && <BarChart
          axes
          colorBars
          width={450}
          height={400}
          data={[
            {x: tempHistory[0].date, y: (units === 'Celsius' ? tempHistory[0].tempC : tempHistory[0].tempF)},
            {x: tempHistory[1].date, y: (units === 'Celsius' ? tempHistory[1].tempC : tempHistory[1].tempF)},
            {x: tempHistory[2].date, y: (units === 'Celsius' ? tempHistory[2].tempC : tempHistory[2].tempF)},
            {x: tempHistory[3].date, y: (units === 'Celsius' ? tempHistory[3].tempC : tempHistory[3].tempF)},
            {x: tempHistory[4].date, y: (units === 'Celsius' ? tempHistory[4].tempC : tempHistory[4].tempF)},
            {x: tempHistory[5].date, y: (units === 'Celsius' ? tempHistory[5].tempC : tempHistory[5].tempF)}
          ]}
        />}
      </div>
    );
  }
}

export default DailyTemps;