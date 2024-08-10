import classes from '../profileCss/ProfileHeader.module.css'
import classNames from 'classnames';

const classNamesList = [{name:"Name", classParam:"name", content:"Jonh Doe"}, 
    {name:"Date of birth", classParam:"birth-date", content:"12.10.1998"},
     {name:"City", classParam:"city-name", content:"Azeroth"}, 
     {name:"Phone number", classParam:"phone-number", content:"+79127347045"}, 
     {name:"Email address", classParam:"email", content:"abcd@gmail.com"}];

const LiProfileComponent = (param)=>{

    return (
    <li className={classNames(classes["info-list"] ,classes[param.classParam])}>
    <span className={classes["info-type"]}>{param.name}:</span>
    <span className={classNames(param.classParam, 'info')}>{param.content}</span>
    </li>
    );
}

const listOfPages = classNamesList.map(({classParam, name, content}, index) =>
    <LiProfileComponent key={index} name={name} classParam={classParam} content={content} />
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