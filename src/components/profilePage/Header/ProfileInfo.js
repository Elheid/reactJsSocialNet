import PersonInfo from '../../../classes/personInfo';
import classes from '../profileCss/ProfileHeader.module.css'
import classNames from 'classnames';

const classNamesList = [{name:"Name", infoType:"name", content:"Jonh Doe"}, 
    {name:"Date of birth", infoType:"birth-date", content:"12.10.1998"},
     {name:"City", infoType:"city-name", content:"Azeroth"}, 
     {name:"Phone number", infoType:"phone-number", content:"+79127347045"}, 
     {name:"Email address", infoType:"email", content:"abcd@gmail.com"}, 
     {name:"Description", infoType:"description", content:"I'm dev"}];

const info = new PersonInfo(classNamesList);

/*
const listOfPages = classNamesList.map(({infoType, name, content}, index) =>
    <LiProfileComponent key={index} name={name} infoType={infoType} content={content} />
);*/




const ProfileInfoComponent = () => {
    const liNodes = info.createInfoComponents();
    return (
        <section className={classNames(classes["profile-info"],"boxOfContent", "inner-box")}>
            <ul className={classes["info-list"]} >
                {liNodes}
            </ul>
        </section>
    );
}

export default ProfileInfoComponent;