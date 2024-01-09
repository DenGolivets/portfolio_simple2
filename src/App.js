import Arrivals from "./components/Arrivals/Arrivals";
import Banner from "./components/Banner/Banner";
import Brands from "./components/Brands/Brands";
import Community from "./components/Community/Community";
import Favourite from "./components/Favourite/Favourite";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Vouchers from "./components/Vouchers/Vouchers";

function App() {

  return (
		<div className="App" style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Favourite />
      <Vouchers />
      <Community />
      <Footer />
		</div>
  );
}

export default App;
