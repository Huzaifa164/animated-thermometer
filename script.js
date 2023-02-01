const animateThermo = () => {
  const thermo = document.getElementById("thermo");
  thermo.innerHTML = "&#xf2cb;";
  setTimeout(() =>{
    thermo.innerHTML = "&#xf2ca;";
    thermo.style.color = "yellow";
  }, 1000);
  setTimeout(() => {
    thermo.innerHTML = "&#xf2c9;";
  }, 2000);
  setTimeout(() => {
    thermo.innerHTML = "&#xf2c8;";
    thermo.style.color = "orange";
  }, 3000);
  setTimeout(() => {
    thermo.innerHTML = "&#xf2c7;";
    thermo.style.color = " red";
  },4000);
  thermo.style.color = "white";
};

animateThermo();
setInterval(animateThermo, 5000);
