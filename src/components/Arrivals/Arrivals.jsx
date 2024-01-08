import Card from '../Card/Card';
import './arrivals.css';

import Card01 from '../../img/categories/cat-01.jpg';
import Card02 from '../../img/categories/cat-02.jpg';
import Card03 from '../../img/categories/cat-03.jpg';


function Arrivals () {
    return (
        <div className='arrivals'>
            <div className='container_arrivals'>
                <div className='arrivals_header'>
                    <h2 className='title2'>New Arrivals</h2>
                </div>
                <div className='arrivals_cards'>
                    <Card 
                    title='Hoodies & Parkas'
                    img={Card01}
                    />
                    <Card 
                    title='Coats & Jackets'
                    img={Card02}
                    />
                    <Card 
                    title='Shorts & T-Shirt' 
                    img={Card03}
                    />
                </div>
            </div>
        </div>
    )
}

export default Arrivals;