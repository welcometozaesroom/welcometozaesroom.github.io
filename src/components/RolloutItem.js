import React from 'react';

export default class RolloutItem extends React.Component {
  render() {
    return (
      <div>
        <hr style={{width: '20%', minWidth: '100px', borderWidth: 2, borderColor: '#707070', borderStyle: 'solid'}} />
        <h2>{this.props.title}</h2>
        {this.props.component}
      </div>
    )
  }
}