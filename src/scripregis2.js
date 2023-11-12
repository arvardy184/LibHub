
var a = document.getElementById("gerakmang")
    const form = document.getElementById('register-form');
    const berhasil=document.getElementById('berhasil')
    var nik = document.getElementById('nik');
    var nohp = document.getElementById('nohp');
    const ok = document.getElementById('ok')
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
      if(isNaN(nik.value)||isNaN(nohp.value)){
        alert("NIK / Nomor Hp harus angka saja ya!")
      }
    else{
        animasikan();
        berhasil.classList.remove('hidden')
    }
        
     
        
        
     
    });
    ok.addEventListener('click',function(){
      ilangdonk();
    });
   

    function animasikan(){
      if(a.classList.contains('kokjauh')){
        a.removeEventListener('animationend',dump)
        a.classList.remove('kokjauh')
      }
      a.classList.add('animated-element');
      
    }
    function setelahIlangdonkSelesai() {
    berhasil.classList.add('hidden');
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