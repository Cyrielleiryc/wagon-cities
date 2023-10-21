import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setActiveCity } from '../actions/index.js'

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city)
  }

  render() {
    const props = this.props
    let classes = "list-group-item"
    if (props.activeCity === props.city) {
      classes += ' active'
    }

    return (
      <li className={classes} onClick={this.handleClick} >
        {props.city.name}
      </li>
    )
	}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
