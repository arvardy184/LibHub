const nig = document.getElementById('nig')
function backdulu(){
    
    nig.classList.remove('munculalus')
    nig.classList.add('ilangalus')
    setTimeout(function() {
        captchakun.classList.add('hidden')
        refreshCaptcha();
        captchaElementInput.value = ''
    },500);
}
function active(){
    
    nig.classList.add('munculalus')
    nig.classList.remove('ilangalus')
    
    if(uwah.classList.contains("bg-red-500")){
    captchakun.classList.remove('hidden');
    }
    else
    alert("KAMU UDAH ISI CAPTCHA SYG");
    
}
var message = document.getElementById('message');
message.style.display="none"
function muter(){
    const pepek = document.getElementById('pepek')
    pepek.classList.add('animate-spin')
    setTimeout(function() {
        pepek.classList.remove('animate-spin')
    },500);
}
const putar = document.getElementById('putar')
const captchakun = document.getElementById('captchakun')
var captchaElementInput = document.getElementById('captchainput')
const refresh = document.getElementById('pepek')
refresh.addEventListener('click',function(){
    setTimeout(function() {
        refreshCaptcha();
    },500);
})
function refreshCaptcha() {
        var captchaElement = document.getElementById('captchabox');
        var newCaptcha = generateRandomCaptcha();
        captchaElement.innerText = generateRandomCaptcha();
    }

    function generateRandomCaptcha() {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var captcha = '';

        for (var i = 0; i < 6; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters.charAt(randomIndex);
        }

        return captcha;
    }
refreshCaptcha();

function cekcaptcha(){
    message.classList.add('bg-white')
    message.classList.remove('menghilang')
    message.classList.add('opacitykan')
    var captchaElementInput = document.getElementById('captchainput').value;
    var captchaElement = document.getElementById('captchabox');
    
    if(captchaElementInput==captchaElement.innerText.trim()){
        
        message.innerText="Captchanya bener syg <3"
        message.classList.add('bg-green-600')
        message.style.display="block"
        setTimeout(function() {
        message.classList.remove('opacitykan')
        message.classList.add('menghilang')
        },1300);
        setTimeout(function() {
        message.classList.remove('bg-green-600')
        message.style.display="none"
        uwah.classList.remove('bg-red-500')
        uwah.classList.add('active')
        captchakun.classList.add('hidden')
        },1500);
    }
    else if(captchaElementInput.trim()==''||captchaElementInput=='Masukkan di sini!'){
        message.innerText="Jangan dikosongkan laa"
        message.style.display="block"
        setTimeout(function() {
        message.classList.remove('opacitykan')
        message.classList.add('menghilang')
        },1300);
        setTimeout(function() {
        message.style.display="none"
        },1500);
    }
    else{
        message.innerText="Masukkin yg bener ahh <3"
        message.classList.add('bg-red-400')
        message.style.display="block"
        setTimeout(function() {
        message.classList.remove('opacitykan')
        message.classList.add('menghilang')
        },1300);
        setTimeout(function() {
        message.style.display="none"
        message.classList.remove('bg-red-400')
        },1500);
    }
}
const form = document.getElementById('login-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch('/login', {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    if(uwah.classList.contains("bg-red-500")){
        alert("ISI CAPTCHA NYA MASBRO!!")
    }
});
function klikds(){
    putar.classList.add('kebawah')
    putar.classList.remove('hidden')
    setTimeout(function()  {
        putar.classList.remove('kebawah')
        putar.classList.add('animate-spin')
    }, 200);
    setTimeout(function()  {
        window.location.reload(true);
        window.location.href='register.html';
    }, 1000);
}