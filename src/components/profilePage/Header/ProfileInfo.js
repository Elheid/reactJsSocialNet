import classes from '../profileCss/ProfileHeader.module.css'
import classNames from 'classnames';

const classNamesList = [{name:"Name", infoType:"name", content:"Jonh Doe"}, 
    {name:"Date of birth", infoType:"birth-date", content:"12.10.1998"},
     {name:"City", infoType:"city-name", content:"Azeroth"}, 
     {name:"Phone number", infoType:"phone-number", content:"+79127347045"}, 
     {name:"Email address", infoType:"email", content:"abcd@gmail.com"}];

const LiProfileComponent = (param)=>{

    return (
    <li className={classNames(classes["info-list"] ,classes[param.infoType])}>
    <span className={classes["info-infoType"]}>{param.name}:</span>
    <span className={classNames(param.infoType, 'info')}>{param.content}</span>
    </li>
    );
}

const listOfPages = classNamesList.map(({infoType, name, content}, index) =>
    <LiProfileComponent key={index} name={name} infoType={infoType} content={content} />
);


const ProfileInfoComponent = () => {
    return (
        <section className={classNames(classes["profile-info"],"boxOfContent", "inner-box")}>
            <ul className={classes["info-list"]} >
                {listOfPages}
            </ul>
        </section>
    );
}

export default ProfileInfoComponent;