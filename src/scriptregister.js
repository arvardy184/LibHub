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
function muter(){
  const pepek = document.getElementById('pepek')
  pepek.classList.add('animate-spin')
  setTimeout(function() {
      pepek.classList.remove('animate-spin')
  },500);
}
var message = document.getElementById('message');
message.style.display="none"
function active(){
    
  nig.classList.add('munculalus')
  nig.classList.remove('ilangalus')
  
  if(uwah.classList.contains("bg-red-500")){
  captchakun.classList.remove('hidden');
  }
  else
  alert("KAMU UDAH ISI CAPTCHA SYG");
  
}
const uwah = document.getElementById('uwah')
const captchakun = document.getElementById('captchakun')
var captchaElementInput = document.getElementById('captchainput')
var a = document.getElementById("gerakmang")
    var x = document.getElementById("snk")
    var duar = document.getElementById("duar")
    const form = document.getElementById('register-form');
    const berhasil=document.getElementById('berhasil')
    const mode = document.getElementById('wow')
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const data = new FormData(form);
      fetch('/register', {
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
      else{
        berhasil.classList.remove('hidden')
        const ok = document.getElementById('ok')
        }
    });
    
    ok.addEventListener('click',function(){
      ilangdonk();
    });
    const email = document.getElementById('email')
    
    function centang(){
      var checkbox = document.getElementById("check");
      checkbox.checked=true;
    }
    function animasikan(){
      if(a.classList.contains('kokjauh')){
        a.removeEventListener('animationend',dump)
        a.classList.remove('kokjauh')
      }
      a.classList.add('animated-element');
      
    }
    function kliksnk(){
      x.removeEventListener('animationend',wadidaw);
      mode.classList.remove('hidden')
      x.classList.add('kiri')
      duar.addEventListener('click',kanankh)
    }
    function kliksa(){
      putar.classList.add('kebawah')
      putar.classList.remove('hidden')
      setTimeout(function()  {
          putar.classList.remove('kebawah')
          putar.classList.add('animate-spin')
      }, 200);
      setTimeout(function()  {
          window.location.reload(true);
          window.location.href='login.html';
      }, 1000);
  }
    function kanankh(){
      x.classList.remove('kiri');
      x.classList.add('kanan')
      x.addEventListener('animationend',wadidaw);
    }
    function wadidaw(){
      mode.classList.add('hidden')
      centang();
      x.classList.remove('kanan')
    }
    function Batalcentang(){
      var checkbox = document.getElementById("check");
      checkbox.checked=false;
    }
    function setelahIlangdonkSelesai() {
    berhasil.classList.add('hidden');
    setTimeout(function() {
      window.location.reload(true);
      window.location.href='registerpg2.html'
    }, 500);
    }
    function ilangdonk(){
      a.classList.remove('animated-element');
      a.classList.add('kokjauh')
      if(a.classList.contains('kokjauh')&&!a.classList.contains('animated-element'))
      a.addEventListener('animationend', dump);
    }
    function dump(){
      a.style.visibility = 'visible';
      a.style.display = 'block';
      setelahIlangdonkSelesai();
    }
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
        captchaElementInput.value=''
        refreshCaptcha();
        },1500);
    }
    else if(captchaElementInput.trim()==''||captchaElementInput=='Masukkan di sini!'){
        message.innerText="Jangan dikosongkan laa"
        message.style.display="block"
        refreshCaptcha();
        setTimeout(function() {
        message.classList.remove('opacitykan')
        message.classList.add('menghilang')
        },1300);
        setTimeout(function() {
        message.style.display="none"
        },1500);
    }
    else{
        refreshCaptcha();
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