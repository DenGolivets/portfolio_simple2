import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Element } from 'react-scroll';
import debounce from 'lodash/debounce';
import BannerImg from '../../img/images/promo-img.jpg'
import './banner.css';

function Banner() {

    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (window.scrollY > 400) {
            controls.start({ x: 0, opacity: 1 });
        }
        }, 400);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <Element name="banner" className="banner1">
        <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.3, ease: 'linear' }}
        >
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
                        Spend minimal $150 get 40% off
                        voucher code for your next purchase
                        </span>
                        </div>
                        <div className='banner_date'>
                            1 July - 10 July 2023
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
        </motion.div>
        </Element>
    )
}

export default Banner;