import Card from '../Card/Card';
import './favourite.css';

import Favourite01 from '../../img/images/promo-01.jpg';
import Favourite02 from '../../img/images/promo-02.jpg';

function Favourite () {
    return (
        <div className='favourite'>
            <div className='container_favourite'>
                <div className='favourite_header'>
                    <h2 className='title2'>New Arrivals</h2>
                </div>
                <div className='favourite_cards'>
                    <Card 
                    title='Trending on instagram'
                    img={Favourite01}
                    />
                    <Card 
                    title='All Under $50'
                    img={Favourite02}
                    />
                </div>
            </div>
        </div>
    )
}

export default Favourite;