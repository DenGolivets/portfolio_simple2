import Card from '../Card/Card';
import './arrivals.css';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Element } from 'react-scroll';
import debounce from 'lodash/debounce';
import Card01 from '../../img/categories/cat-01.jpg';
import Card02 from '../../img/categories/cat-02.jpg';
import Card03 from '../../img/categories/cat-03.jpg';


function Arrivals () {

    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (window.scrollY > 100) {
            controls.start({ x: 0, opacity: 1 });
        }
        }, 100);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <Element name="arrivals" className="arrivals1">
        <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: 'linear' }}
        >
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
        </motion.div>
        </Element>
    )
}

export default Arrivals;