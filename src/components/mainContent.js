import {MainClickerComponent} from "./clicker/MainClicker";
import ProfilePageComponent from "./profilePage/ProfileMainPage";
const MainContentComponent = () => {
    const path = window.location.pathname;
    let mainPage = <ProfilePageComponent />;
    if (path.indexOf("clicker")>=0)mainPage=<MainClickerComponent/>;
    
    return (
        <main className="main-content">
        {mainPage}
        </main>
    );
}

export default MainContentComponent;