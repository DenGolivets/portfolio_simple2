import './brands.css'
import hm from '../../img/brands/HM.png'
import obey from '../../img/brands/Obey.png'
import sf from '../../img/brands/Shopify.png'
import lacoste from '../../img/brands/Lacoste.png'
import levis from '../../img/brands/Levis.png'
import amazon from '../../img/brands/Amazon.png'

function Brands () {
    return (
        <div className='brands'>
            <div className='container_brands'>
                <div className='brands-list'>
                    <a><img src={hm} alt='hm' /></a>
                    <a><img src={obey} alt='obey' /></a>
                    <a><img src={sf} alt='sf' /></a>
                    <a><img src={lacoste} alt='lacoste' /></a>
                    <a><img src={levis} alt='levis' /></a>
                    <a><img src={amazon} alt='amazon' /></a>
                </div>
            </div>

        </div>
    )
}

export default Brands;