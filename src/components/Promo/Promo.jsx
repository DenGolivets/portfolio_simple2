import './promo.css'
import PromoImg from '../../img/images/header-img.jpg'

function Promo() {
    return (
        <div className='promo'>
            <div className='container_promo'>
                <div className='promo_content'>
                    <div className='promo_text'>
                        <div className='promo_title'>
                            <span className='highlight'>
                                <span>
                                    LET'S
                                </span>
                            </span>
                            EXPLORE
                            <span className='highlight highlight_yellow'>
                                <span>
                                    BRANDED 
                                </span>
                            </span>
                            CLOTHES.
                        </div>
                        <div className='promo_desc'>
                            Ride the Wave of Fashion!
                        </div>
                        <div className='promo_btn_wrapper'>
                            <a href='#!' className='promo_btn'>
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className='promo_img'>
                        <img src={PromoImg} alt='PromoImg' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Promo;