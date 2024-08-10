import { useContext } from "react";
import { ClickerContext } from "./MainClicker";


const ClickableImgComponent = () => {
  const { count, handleClick } = useContext(ClickerContext); 
  return (
    <button count={count} style={{display:"contents"}} onClick={handleClick}>
      <img src="logo192.png" className='clickable-image' alt="clickable-image"></img>
    </button>
  )
}


export default ClickableImgComponent;


