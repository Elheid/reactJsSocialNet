const ClickableImgComponent = ()=>{
    return (
        <img src="logo192.png" className='clickable-image' alt="clickable-image"></img>
    )
}
const addImageClickEffect = ()=>{
    const button = document.querySelector('.clickable-image');
    const plusOne = document.createElement('span');
    plusOne.classList.add('plus-one');
    plusOne.textContent = '+1';
    button.appendChild(plusOne);
    
    button.addEventListener('click', () => {
      plusOne.classList.add('show');
    
      // Удалите класс "show" через 0.5 секунды, чтобы эффект исчез
      setTimeout(() => {
        plusOne.classList.remove('show');
      }, 500);
    });
}

export default ClickableImgComponent;