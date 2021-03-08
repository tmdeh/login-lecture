const id = document.querySelector("#id"),
 password = document.querySelector("#password"),
 loginbutton = document.querySelector("button");


loginbutton.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        password: password.value,
    };
    console.log(req);
}