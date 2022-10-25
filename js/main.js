const navigation = document.querySelector('.header-section__navigation');
document.querySelector('.burger-menu--btn').addEventListener('click',()=>{
    if(navigation.style.display==='flex'){
        navigation.style.display = "none";
    }else{
        navigation.style.display = "flex";
    }
})

const resetMenu=()=>{
    if(window.innerWidth>=1060){
        navigation.style.display="flex";
    }else if(window.innerWidth<1060){
        navigation.style.display="none";
    }
  }
  window.addEventListener("resize",resetMenu);