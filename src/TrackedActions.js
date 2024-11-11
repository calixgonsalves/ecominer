// TrackedActions.js
import React from 'react';

class TrackedActions extends React.Component {
  render() {
    if (this.props.trackedActions.length === 0) {
      return <p>Please choose an action to track</p>;
    }

    return (
      <div>
        <h2>Your Actions</h2>
        <ul>
          {this.props.trackedActions.map((action) => (
            <li key={action.name}>
              <span>{action.name}</span>
              <span> ({action.carbonReduction} kg CO2 reduction)</span>
              <span>Count: {action.count}</span>
              <button onClick={() => this.props.onRemoveAction(action)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TrackedActions;