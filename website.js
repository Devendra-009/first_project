const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
      choosenProduct = products[index];
  
      //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      //assing new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });

  const buyButton=document.querySelectorAll(".buyButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  buyButton.forEach((item, index) => {
      item.addEventListener("click",()=>{
    payment.style.display="flex"
  });
 

  });
  close.addEventListener("click",()=>{
    payment.style.display="none"
  });




