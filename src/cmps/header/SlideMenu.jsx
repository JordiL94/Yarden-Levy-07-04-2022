import { Link } from 'react-router-dom';

export function SlideMenu(props) {
    const { preferences } = props;

    return (
        <section>
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