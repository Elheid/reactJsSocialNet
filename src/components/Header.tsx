import NavComponent from "./Nav";


/**
 * Header component for the application
 * @component
 * @returns {JSX.Element} The header component
 */
const HeaderComponent = () => {
    //const header = document.querySelector("header.main-header");
    return (
        <header className="App-header main-header sticky-header">
            <NavComponent />
        </header>
    );
}

export default HeaderComponent;