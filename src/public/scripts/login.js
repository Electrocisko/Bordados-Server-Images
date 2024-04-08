const loginForm = document.querySelector(".login");
const URL = "api/login";


loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let data = new FormData(loginForm);
    let obj = {};
    data.forEach((value, key) => (obj[key] = value));
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) =>{
     console.log(data);
     if(data.status === "success") {
      window.location.href="/"  // Se redirige a pagina de admin
     } else {
      window.location.href="/login"  // Se redirige a pagina de admin
     }
      } 
      )
      .catch((error) => {
        console.log(`Error en peticion login.js fetch: ${error}`);
      });
    loginForm.reset();
  });