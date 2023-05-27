
const icon = document.querySelector(".icon");
const range = document.getElementById("range")
const count = document.getElementById("count")
const test = document.getElementById("test")
const azalt =document.getElementById("azalt")
const coxalt =document.getElementById("coxalt")
const lowercase = document.getElementById("lowercase")
const uppercase = document.getElementById("uppercase")
const symbols = document.getElementById("symbols")
const numbers = document.getElementById("numbers")
const input = document.getElementById("password");



coxalt.addEventListener("click",()=>{
    range.value++
    let value = range.value;
    count.textContent = value;
    genPassword()
   
})
azalt.addEventListener("click",()=>{
    range.value--
    let value = range.value;
    count.textContent = value;
    genPassword()
   
})


range.addEventListener("input", () => {
    let value = range.value;
    count.textContent = value;
    randomPassword()
    genPassword()

})


    const genPassword = () => {
        icon.classList.toggle("active")
        let passwordLength = range.value;
        let chars = "";
        if (uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
        if (numbers.checked) chars += "0123456789";
        if (symbols.checked) chars += "!@#$%^&*()";
        let password = "";
        for (let i = 0; i < passwordLength; i++) {
          let randomNumber = Math.floor(Math.random() * chars.length);
          password += chars.substring(randomNumber, randomNumber + 1);
        }
        input.value = password;
        if (range.value < 5) {
          test.innerHTML = "Zəif";
          test.style.backgroundColor = "red";
          test.style.color = "black";
        } else if (range.value < 10) {
          test.textContent = "Orta";
          test.style.backgroundColor = "yellow";
          test.style.color = "black";
        } else if (range.value < 20) {
          test.textContent = "Zor";
          test.style.backgroundColor = "green";
          test.style.color = "white";
        } else if (range.value < 30) {
          test.textContent = "Çox zor";
          test.style.backgroundColor = "#1eff00";
          test.style.color = "black";
        } else if (range.value < 50) {
          test.textContent = "bəsdi aq";
          test.style.backgroundColor = "#0ACEDA";
          test.style.color = "black";
        }
      };


const randomPassword = () => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = range.value;
    let password = "";
 for (var i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber + 1);
  }
  input.value = password;
        if(range.value < 5) {
            test.innerHTML = "Zeif"
            test.style.backgroundColor = "red"
            test.style.color = "black"
        }
        else if(range.value < 10) {
            test.textContent = "Orta"
            test.style.backgroundColor = "yellow"
            test.style.color = "black"
        }
        else if(range.value < 20) {
            test.textContent = "Zordu"
            test.style.backgroundColor = "green"
            test.style.color = "white"
        }
        else if(range.value < 50) {
            test.textContent = "Aə hara gedsən aəə"
            test.style.backgroundColor = "#1eff00"
            test.style.color = "black"
        }
 }




const  copyPassword =() => {
  let  copyText = password;
  copyText.select();
  document.execCommand("copy");
}  
