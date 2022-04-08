import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function _AppHeader() {

    return (
        <section className="app-header">
            <img src="" alt="" />
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </nav>
            <button className='settings-button'>⚙️</button>
        </section>
    )
}

function mapStateToProps({ PreferenceModule }) {

}

const mapDispatchToProps = {

}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader);