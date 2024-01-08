import VoucgerImg from '../../img/images/vouchers-img.png';
import AppIcon from '../../img/icons/app-store.png';
import GoogleIcon from '../../img/icons/google-play.png'
import './vouchers.css';

function Vouchers () {
    return (
        <div className='vouchers'>
            <div className='vouchers_content'>
                <div className='vouchers_text'>
                    <div className='vouchers_download'>
                        DOWNLOAD APP &
                        GET THE VOUCHER!
                    </div>
                    <div className='vouchers_social'>
                        Get 30% off for first transaction using
                        Rondovision mobile app for now.
                    </div>
                    <div className='vouchers_links'>
                        <a href='#!'><img className='AppIcon' src={AppIcon} alt='AppIcon' /></a>
                        <a href='#!'><img className='GoogleIcon' src={GoogleIcon} alt='GoogleIcon' /></a>
                    </div>
                </div>
                <div className='vouchers_img'>
                    <img src={VoucgerImg} alt='VoucgerImg' />
                </div>
            </div>
        </div>
    )
}

export default Vouchers;