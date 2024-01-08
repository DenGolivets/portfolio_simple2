import Arrivals from "./components/Arrivals/Arrivals";
import Banner from "./components/Banner/Banner";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";

function App() {

  return (
		<div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
		</div>
  );
}

export default App;
