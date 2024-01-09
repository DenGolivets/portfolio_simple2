import './footer.css';
import FaceIcon from '../../img/socials/fb.svg';
import InstIcon from '../../img/socials/inst.svg';
import TwitterIcon from '../../img/socials/tw.svg';
import InIcon from '../../img/socials/in.svg';

function Footer () {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='left_section'>
                    <span className='fashion_left'>FASHION</span>
                    <span className='complete_left'>Complete your style with awesome clothes from us</span>
                    <div className='icons_footer'>
                        <img className='fb_f' src={FaceIcon} alt='FaceIcon' />
                        <img className='inst_f' src={InstIcon} alt='InstIcon' />
                        <img className='twit_f' src={TwitterIcon} alt='TwitterIcon' />
                        <img className='in_f' src={InIcon} alt='InIcon' />
                    </div>
                </div>
                <div className='right_section'>
                    <div className='first_column'>
                        <span className='comp'>Company</span>
                        <span className='about'>About</span>
                        <span className='about'>Contact Us</span>
                        <span className='about'>Support</span>
                        <span className='about'>Careers</span>
                    </div>
                    <div className='second_column'>
                        <span className='comp'>Quick Link</span>
                        <span className='about'>Share Location</span>
                        <span className='about'>Orders Tracking</span>
                        <span className='about'>Size Guide</span>
                        <span className='about'>FAQs</span>
                    </div>
                    <div className='third_column'>
                        <span className='comp'>Legal</span>
                        <span className='about'>Terms & conditions</span>
                        <span className='about'>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;