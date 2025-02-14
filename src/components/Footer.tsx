import NavComponent from "./Nav";
/**
 * Footer component for the application
 * @component
 * @returns {JSX.Element} The footer component
 */
const FooterComponent = () => {
    //const header = document.querySelector("footer.main-footer");
    return (
        <footer className="main-footer icons-on-background">
            <NavComponent />
        </footer>
    );
}
export default FooterComponent;