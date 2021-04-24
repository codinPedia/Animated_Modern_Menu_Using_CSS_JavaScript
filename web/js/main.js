document.querySelector("body > header > img").onclick = ()=>{
  document.querySelector("body > menu").style.transform = "translateX(0%)";
  document.querySelector("body > cover").style.opacity = 1;
  document.querySelector("body > cover").style.zIndex = 3;

  setTimeout(()=>{
    document.querySelectorAll("body > menu > *").forEach((element, i)=>{
      element.style.transitionDelay = `${i/10}s`;
      element.classList.add("fadeIn");
    });
  }, 200);
};

document.querySelector("body > cover").onclick = ()=>{
  document.querySelector("body > menu").style.transform = "translateX(-100%)";
  document.querySelector("body > cover").style.opacity = 0;
  setTimeout(()=>{
    document.querySelectorAll("body > menu > *").forEach((element, i)=>{
      element.removeAttribute("style");
      element.removeAttribute("class");
    });
    document.querySelector("body > cover").style.zIndex = -3;
  }, 500);
};
