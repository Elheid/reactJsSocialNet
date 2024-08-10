const ProfileInfoComponent = () => {
    return (
        <section className="profile-info box-of-content">
            <ul className="info-list">
                <li className="info-item name"><span className="info-type">Name:</span> <span className="name info">Jonh Doe</span> </li>
                <li className="info-item birth-date"> <span className="info-type">Date of birth:</span> <span className="birth-date info">12.10.1998</span> </li>
                <li className="info-item city-name"> <span className="info-type">City:</span> <span className="city-name info">Azeroth</span></li>
                <li className="info-item phone-number"> <span className="info-type">Phone number:</span> <span className="phone-number info">+79127347045</span></li>
                <li className="info-item email"> <span className="info-type">Email address:</span> <span className="email info">abcd@gmail.com</span></li>
            </ul>
        </section>
    );
}

export default ProfileInfoComponent;