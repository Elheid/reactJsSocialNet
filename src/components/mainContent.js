
import {MainClickerComponent} from "./clicker/MainClicker";
import MainMessagesComponent from "./Messages/MessangesMain";
import ProfilePageComponent from "./profilePage/ProfileMainPage";
const MainContentComponent = () => {
    const path = window.location.pathname;
    let mainPage = <ProfilePageComponent />;
    if (path.indexOf("Profile")<0)mainPage=<MainClickerComponent/>;
    if (path.indexOf('Messanges')>=0) mainPage = <MainMessagesComponent />
    return (
        <main className="main-content">
        {mainPage}
        </main>
    );
}

export default MainContentComponent;