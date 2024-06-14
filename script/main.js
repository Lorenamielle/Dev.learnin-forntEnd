var intervalerror = undefined;

function showPassword() {
    var inputPass = document.getElementById('password')
    var bntShowPass = document.getElementById('bttpassword')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        bntShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
        inputPass.setAttribute('type', 'password')
        bntShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
}

async function addUser(event) {
    event.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password })
    }).then(() => window.location.href = "login.html")
}

async function login(event) {
    event.preventDefault()
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password })
    })
    .then(data=>data.json())
    .then(() => window.location.href = "menu.html")
    .catch(e => {
        document.getElementById('error').style.display = "block";
        if(intervalerror === undefined)
        intervalerror = setInterval(()=>{
            document.getElementById('error').style.display = "none"
            return () => clearInterval(intervalerror);
        },3000);
    })
}

function login() {
    window.location.href = "login.html"
}

function criarconta(){
    window.location.href = "criarconta.html"
}


// Função para fazer a solicitação HTTP e manipular a resposta
function getQuestions() {
    fetch('http://localhost:8080/question/1')
        .then(response => response.json())
        .then(data => {
            const questionList = document.getElementById('questionList');
            questionList.innerHTML = ''; // Limpa a lista antes de adicionar as novas perguntas

            data.forEach(question => {
                const listItem = document.createElement('h1');
                listItem.textContent = question.questionText;
                questionList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao obter as perguntas:', error));
}
