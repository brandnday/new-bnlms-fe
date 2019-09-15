import React from 'react'


export default class Authorize extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <>{this.props.children}</>
    )}

}