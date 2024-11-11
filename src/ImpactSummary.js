// ImpactSummary.js
import React from 'react';

class ImpactSummary extends React.Component {
  render() {
    return (
      <div>
        <h2>Impact Summary</h2>
        <p>You contributed to Total CO2 reduction of: {this.props.totalCarbonReduction} kg</p>
      </div>
    );
  }
}

export default ImpactSummary;