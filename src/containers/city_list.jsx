import React, { Component } from "react";
import City from './city.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setCities } from '../actions/index.js'

class CityList extends Component {
	componentWillMount() {
		this.props.setCities()
	}

	render() {
		return (
      <div className="cities">
        <ul className="list-group">
          { this.props.cities.map((city, index) => (
            <City city={city} key={index} />
          ))}
        </ul>
      </div>
    );
	}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
