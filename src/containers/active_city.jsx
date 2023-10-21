import React, { Component } from "react"
import { connect } from 'react-redux'

class City extends Component {
  render() {
    const city = this.props.activeCity
    const imageUrl = `https://kitt.lewagon.com/placeholder/cities/${city.slug}`

    return (
      <div className="active-city">
        <h3>{city.name}</h3>
        <p>{city.address}</p>
        {city.name && <img src={imageUrl} alt={city.name}/>}
      </div>
    )
	}
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps, null)(City);
