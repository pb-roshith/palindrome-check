const txtInput = document.querySelector(".inputs input");
check = document.querySelector(".inputs button");
info = document.querySelector(".info-txt");
let filter;

check.addEventListener("click", ()=>{
  let rev=filter.split("").reverse().join("");
  info.style.display="block";
  if(filter!=rev){
    return info.innerHTML='not a Palindrome';
  }
  return info.innerHTML='it is a palindrome!';

});

txtInput.addEventListener("keyup",()=>{
  filter=txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
  if(filter){
    return check.classList.add("active");
  }
  check.classList.remove("active");
});
