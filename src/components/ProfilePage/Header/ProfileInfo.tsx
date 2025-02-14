import PersonInfo from '../../../classes/personInfo';
import classes from '../profileCss/ProfileHeader.module.css'
import classNames from 'classnames';

interface InfoItem {
    name: string;
    infoType: string;
    content: string;
}

const classNamesList: InfoItem[] = [{ name: "Name", infoType: "name", content: "Jonh Doe" },
{ name: "Date of birth", infoType: "birth-date", content: "12.10.1998" },
{ name: "City", infoType: "city-name", content: "Land of Oz" },
{ name: "Phone number", infoType: "phone-number", content: "+79127347045" },
{ name: "Email address", infoType: "email", content: "abcd@gmail.com" },
{ name: "Description", infoType: "description", content: "I'm dev" }];

const info = new PersonInfo(classNamesList);



interface ProfileInfoComponentProps {
    /** Кастомное содержимое вместо списка по умолчанию */
    children?: React.ReactNode;
}

/**
 * Profile information section component
 * @component
 * @returns {JSX.Element} The profile information section component
 */
const ProfileInfoComponent = ({ children }: ProfileInfoComponentProps) => {
    // Дефолтное содержимое - список
    const defaultContent = (
        <ul className={classes["info-list"]}>
            {info.createInfoComponents()}
        </ul>
    );

    return (
        <section className={classNames(
            classes["profile-info"], 
            "boxOfContent", 
            "inner-box"
        )}>
            {children ?? defaultContent}
        </section>
    );
};

export default ProfileInfoComponent;