
import { Route, Routes } from "react-router-dom";
import { MainClickerComponent } from "./clicker/MainClicker";
import MainMessagesComponent from "./MessagesPage/MessangesMain";
import ProfilePageComponent from "./ProfilePage/ProfileMainPage";
import AsideNavComponent from "./ProfilePage/ProfileAsideNav";
const MainContentComponent = () => {
    /*const path = window.location.pathname;
    let mainPage = <ProfilePageComponent />;
    if (path.indexOf("Profile")<0)mainPage=<MainClickerComponent/>;
    if (path.indexOf('Messanges')>=0) mainPage = <MainMessagesComponent />*/
    return (
        <main className="main-content">
            <AsideNavComponent />
            <Routes>
                <Route path="/Profile" element={<ProfilePageComponent />} />
                <Route path="/Messages" element={<MainMessagesComponent />} />
                <Route path="/Messages/:id" element={<MainMessagesComponent />} />
                <Route path="/" element={<MainClickerComponent />} />
            </Routes>

            {/*mainPage*/}
        </main>
    );
}

export default MainContentComponent;