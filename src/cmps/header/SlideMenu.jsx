import { Link } from 'react-router-dom';

export const SlideMenu = (props) => {
    // const { preferences } = props;

    return <div></div>

    return (
        <section className="slide-menu">
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </nav>
            <div className="settings">
                <button>Dark Mode</button>
                <button>Degree Type</button>
            </div>
        </section>
    )
}