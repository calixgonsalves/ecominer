// TrackedActions.js
import React from 'react';
import './App.css';

class TrackedActions extends React.Component {
  render() {
    if (this.props.trackedActions.length === 0) {
      return <p className="no-actions">Please choose an action to track</p>;
    }

    return (
      <div className="tracked-actions">
        <h2></h2>
        <ul>
          {this.props.trackedActions.map((action) => (
            <li key={action.name} className="tracked-action-item">
              <div className="tracked-action-details">
                <span>{action.name}</span>
                <span> ({action.carbonReduction} kg CO2 reduction)</span>
              </div>
              <span className="tracked-action-count">Count: {action.count}</span>
              <button className="delete-button" onClick={() => this.props.onRemoveAction(action)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TrackedActions;
