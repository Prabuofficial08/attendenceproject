

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "Mr.Prabu" && password == "123456") {
       
        window.location.href = "student.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}

var typed=new Typed(".auto-typed",{
    strings:["Christ college of Engineering and Technology",],
    typeSpeed:100,
    backSpeed:100,
})




