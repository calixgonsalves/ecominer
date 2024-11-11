// ImpactSummary.js
import React from 'react';
import './App.css';

class ImpactSummary extends React.Component {
  render() {
    return (
      <div className="impact-summary">
        <h2>Impact Summary</h2>
        <p className="summary-text">You contributed to a Total CO2 reduction of: <span className="total-reduction">{this.props.totalCarbonReduction} kg</span></p>
      </div>
    );
  }
}

export default ImpactSummary;
