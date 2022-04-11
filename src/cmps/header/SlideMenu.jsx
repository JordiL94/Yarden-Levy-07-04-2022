import { Link } from 'react-router-dom';

export const SlideMenu = (props) => {
    const { toggleDarkMode, toggleFarenheit, isDarkMode, isFarenheit, slideMenu } = props;

    return (
        <section className={slideMenu ? "slide-menu visible flex column space-between" : "slide-menu flex column space-between"}>
            <nav className="mobile-nav flex column">
                <Link to={'/'}>Home</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </nav>
            <div className="settings flex">
                <button onClick={() => toggleDarkMode()}>Dark Mode {isDarkMode ? 'ON' : 'OFF'}</button>
                <button onClick={() => toggleFarenheit()}>Degree Type {isFarenheit ? '°F' : '°C'}</button>
            </div>
        </section>
    )
}