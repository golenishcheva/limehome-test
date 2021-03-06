import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.fixNav = this.fixNav.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.fixNav);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.fixNav);
    }

    fixNav() {
        const header = document.querySelector('.header');
        let topOfNav:number = 0;
        if (header instanceof HTMLElement) {topOfNav = header.offsetTop};

        if (header && window.scrollY >= topOfNav) {
            header.classList.add('fixed-header');
        } else if (header) {
            header.classList.remove('fixed-header');
        }
    }
  render() {
    return (
        <header className='header'>
            <nav className='header_nav'>
                <ul className='header_menu'>
                    <li className='header_menu-item'>
                        <a href='#'>
                            <img src='limehome_logo.svg' alt='Logo'/>
                        </a>
                    </li>
                    <li className='header_menu-item'>
                        <button>
                            <img src='burger_icon.svg' alt='Menu button'/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;