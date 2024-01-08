import logoImg from '../../img/icons/logo.svg'
import './header.css'

function Header () {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header_row'>
                    <div className='header_logo'>
                        <img src={logoImg} alt='header_logo' />
                        <span>Fashion</span>
                    </div>
                    <nav className='header_nav'>
                        <ul>
                            <li>
                                <a href='#'>CATALOGUE</a>
                            </li>
                            <li>
                                <a href='#'>FASHION</a>
                            </li>
                            <li>
                                <a href='#'>FAVOURITE</a>
                            </li>
                            <li>
                                <a href='#'>LIFESTYLE</a>
                            </li>
                            <li>
                                <a href='#' className='signup'>SIGN UP</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;