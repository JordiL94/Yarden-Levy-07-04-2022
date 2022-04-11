import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleDarkMode, toggleFarenheit } from '../../store/user.action';
import { SlideMenu } from './SlideMenu';

const _AppHeader = (props) => {
    const { toggleDarkMode, toggleFarenheit, isDarkMode, isFarenheit } = props;

    const [slideMenu, setSlideMenu] = useState(false);

    return (
        <section className="app-header flex space-between">
            <div>
                <img src="" alt="" />
                <nav className="desktop-nav flex">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/favorites'}>Favorites</Link>
                </nav>
            </div>
            <button className='settings-button' onClick={() => setSlideMenu(!slideMenu)}>⚙️</button>
            {slideMenu && <SlideMenu toggleDarkMode={toggleDarkMode} toggleFarenheit={toggleFarenheit}
                isDarkMode={isDarkMode} isFarenheit={isFarenheit} />}
        </section>
    )
}

function mapStateToProps({ userModule }) {
    return {
        isDarkMode: userModule.isDarkMode,
        isFarenheit: userModule.isFarenheit
    };

}

const mapDispatchToProps = {
    toggleDarkMode,
    toggleFarenheit
}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader);