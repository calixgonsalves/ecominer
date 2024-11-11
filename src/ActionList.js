// ActionList.js
import React from 'react';
import './App.css';

class ActionList extends React.Component {
  render() {
    return (
      <div className="action-list">
        <ul>
          {this.props.actions.map((action) => (
            <li key={action.name} className="action-item">
              <div className="action-details">
                <span className="action-name">{action.name}</span>
                <span className="carbon-reduction">({action.carbonReduction} kg CO2 reduction)</span>
              </div>
              <button className="add-button" onClick={() => this.props.onAddAction(action)}>Add</button>
              <span className="action-count">Count: {action.count}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ActionList;
