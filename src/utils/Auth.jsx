
export function IsLoggedIn(){
  const isLoggedIn = localStorage.getItem("user");
  console.log(JSON.parse(isLoggedIn));
  console.log(localStorage)
}

