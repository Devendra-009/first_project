const loginButton=document.querySelector(".loginButton");
  const box = document.querySelector("#box");
  const off = document.querySelector(".off");

  loginButton.addEventListener("click",()=>{
    box.style.display="flex"
  })

  off.addEventListener("click",()=>{
    box.style.display="none"
  })