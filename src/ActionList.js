// ActionList.js
import React from 'react';

class ActionList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.actions.map((action) => (
          <li key={action.name}>
            <span>{action.name}</span>
            <span> ({action.carbonReduction} kg CO2 reduction)</span>
            <button onClick={() => this.props.onAddAction(action)}>Add</button>
            <span>Count: {action.count}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ActionList;