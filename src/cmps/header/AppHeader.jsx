import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { SlideMenu } from './SlideMenu';

const _AppHeader = () => {
    const [slideMenu, setSlideMenu] = useState(false);

    return (
        <section className="app-header flex">
            <img src="" alt="" />
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </nav>
            <button className='settings-button' onClick={() => setSlideMenu(!slideMenu)}>⚙️</button>
            {slideMenu && <SlideMenu />}
        </section>
    )
}

function mapStateToProps({ PreferenceModule }) {
    return {};

}

const mapDispatchToProps = {

}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader);