import { Link } from 'react-router-dom';

export const SlideMenu = (props) => {
    const { toggleDarkMode, toggleFarenheit, isDarkMode, isFarenheit } = props;

    return (
        <section className="slide-menu">
            <nav className="mobile-nav">
                <Link to={'/'}>Home</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </nav>
            <div className="settings">
                <button onClick={() => toggleDarkMode()}>Dark Mode {isDarkMode ? 'ON' : 'OFF'}</button>
                <button onClick={() => toggleFarenheit()}>Degree Type {isFarenheit ? '°F' : '°C'}</button>
            </div>
        </section>
    )
}