import BannerImg from '../../img/images/promo-img.jpg'
import './banner.css';

function Banner() {
    return (
        <div className='banner'>
            <div className='container_banner'>
                <div className='banner_img'>
                    <img src={BannerImg} alt='BannerImg' />
                </div>
                <div className='banner_container_title'>
                    <div className='banner_title'>
                        <div className='banner_highlight'>
                        <span className='highlight2'>
                                <span>
                                    PAYDAY
                                </span>
                            </span>
                            SALE NOW
                        </div>
                        <div className='banner_desc'>
                        <span className='text-with-shadow'>
                        Spend minimal $100 get 30% off
                        voucher code for your next purchase
                        </span>
                        </div>
                        <div className='banner_date'>
                            1 June - 10 June 2021
                        </div>
                        <div className='banner_terms'>
                            *Terms & Conditions apply
                        </div>
                        <div className='promo_btn_wrapper2'>
                            <a href='#!' className='promo_btn2'>
                                <span style={{ fontSize: '24px' }}>Shop Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;