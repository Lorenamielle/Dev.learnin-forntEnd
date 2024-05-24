function showPassword(){
    var inputPass = document.getElementById('password')
    var bntShowPass = document.getElementById('bttpassword')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        bntShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type', 'password')
        bntShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

