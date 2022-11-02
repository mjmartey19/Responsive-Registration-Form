const submitBtn = document.querySelector("#submit"),
input = document.querySelectorAll(".field input");

submitBtn.onclick = () =>{
    for (let i = 0; i < input.length; i++) {
    if(input[i].value == ""){
        input[i].classList.add('active');
    }else{
        input[i].classList.remove('active');
    }
  }
}