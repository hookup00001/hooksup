let storedname = sessionStorage.getItem('name')||'Our beloved Customer';
let storedcode = sessionStorage.getItem('code')||'You have filled on the form';


/*
if (storedname === null && storedcode === null){
    storedname = 'Our beloved customer';
    storedcode = 'You have filled on the form';

}
    */


const thankAlert = document.querySelector('.renderdata');
thankAlert.innerHTML = `
<p> We are happy ${storedname} you are here.We will call you
    after we have received your connection fee from 
    this code/phonenumber ${storedcode}.



</p>`