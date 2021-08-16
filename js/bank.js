// login file 

document.getElementById('login-button').addEventListener('click',function(){
    console.log('clicked');
    // get email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail); // checked  
    emailField.value = '';
    // get pass 
    const passFeild = document.getElementById('user-password');
    const userPass = passFeild.value;
    // console.log(userPass); //checked

    // condition 
    if(userEmail =='sontan@baap.com' && userPass == 'secret'  ){
        // console.log('valid ') // checked
        window.location.href='banking.html';
    }

})
 const s =document.getElementById('login-button')
 console.log(s)


// banking file 

 const e= document.getElementById('deposit-submit')
 console.log(e)