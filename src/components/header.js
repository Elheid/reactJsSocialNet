import NavComponent from "./Nav";

const HeaderComponent = () => {
    //const header = document.querySelector("header.main-header");
    return (
        <header className="App-header main-header sticky-header">
            <NavComponent />
        </header>
    );
}

export default HeaderComponent;