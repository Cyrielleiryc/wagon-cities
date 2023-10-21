import CityList from '../containers/city_list.jsx'
import ActiveCity from '../containers/active_city.jsx'

// TODO: remove this line and use Redux
// const cities = [
//   { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
//   { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
//   { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
// ];

function App() {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
}

export default App;
