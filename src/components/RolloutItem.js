import React from 'react';

export default class RolloutItem extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.component}
      </div>
    )
  }
}