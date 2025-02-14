import { useClick } from "../../hooks/useClick";


const ClickableImgComponent = () => {
  const { handleClick } = useClick();;
    
    return (
        <button style={{display:"contents"}} onClick={handleClick}>
            <img 
                src="logo192.png" 
                className='clickable-image' 
                alt="clickable-image" 
            />
        </button>
    );
};


export default ClickableImgComponent;


