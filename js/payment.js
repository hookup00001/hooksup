const userNameInput = document.querySelector("#username");
const codeInput = document.querySelector("#transaction");
const saves = document.querySelector("#saves");

saves.addEventListener('click',() =>{
    const name = userNameInput.value;
    const code =codeInput.value;

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('code', code);
   
})


