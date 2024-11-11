// App.js
import React, { Component } from 'react';
import ActionList from './ActionList';
import ImpactSummary from './ImpactSummary';
import TrackedActions from './TrackedActions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [
        { name: 'Switch off electronic appliances', carbonReduction: 0.7, count: 0 },
        { name: 'Use public transport', carbonReduction: 1.5, count: 0 },
        { name: 'Share a ride', carbonReduction: 1.25, count: 0 },
        { name: 'Recycle and Reuse', carbonReduction: 1, count: 0 },
        { name: 'Encourage repurchase', carbonReduction: 2.6, count: 0 },
        { name: 'Use eco-friendly products', carbonReduction: 2.6, count: 0 },
      ],
      trackedActions: [],
      totalCarbonReduction: 0,
    };
  }

  handleAddAction = (action) => {
    const updatedActions = this.state.actions.map((a) => {
      if (a.name === action.name) {
        return { ...a, count: a.count + 1 };
      }
      return a;
    });
    const newTrackedAction = {
      name: action.name,
      carbonReduction: action.carbonReduction,
      count: 1,
    };
    this.setState({
      actions: updatedActions,
      trackedActions: [...this.state.trackedActions, newTrackedAction],
      totalCarbonReduction: this.state.totalCarbonReduction + action.carbonReduction,
    });
  };

  handleClearActions = () => {
    this.setState({
      actions: this.state.actions.map((a) => ({ ...a, count: 0 })),
      trackedActions: [],
      totalCarbonReduction: 0,
    });
  };

  handleRemoveAction = (action) => {
    const updatedTrackedActions = this.state.trackedActions.filter(
      (a) => a.name !== action.name
    );
    const updatedTotalCarbonReduction =
      this.state.totalCarbonReduction - action.carbonReduction;
    this.setState({
      trackedActions: updatedTrackedActions,
      totalCarbonReduction: updatedTotalCarbonReduction,
    });
  };

  render() {
    return (
      <div id="app-root">
        <header className="header">
          <h1>Ecominer</h1>
          <p>Track your eco-friendly actions and reduce your carbon footprint.</p>
        </header>
        
        <section className="content">
          <div className="ActionList">
            <h2>Available Actions</h2>
            <ActionList 
              actions={this.state.actions} 
              onAddAction={this.handleAddAction} 
            />
          </div>

          <div className="ImpactSummary">
            <h2>Total Impact</h2>
            <ImpactSummary 
              totalCarbonReduction={this.state.totalCarbonReduction} 
            />
          </div>

          <div className="TrackedActions">
            <h2>Your Actions</h2>
            <TrackedActions
              trackedActions={this.state.trackedActions}
              onRemoveAction={this.handleRemoveAction}
            />
          </div>

          <button 
            className="clear-btn" 
            onClick={this.handleClearActions}
          >
            Clear All Actions
          </button>
        </section>
      </div>
    );
  }
}

export default App;
