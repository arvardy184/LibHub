
var ab= document.getElementById("gerakmang2")
    const form2 = document.getElementById('register-form2');
    const berhasilah=document.getElementById('berhasilah')
    var nik = document.getElementById('nik');
    var nohp = document.getElementById('nohp');
    const okf = document.getElementById('okf')
    form2.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const data = new FormData(form2);
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
        if(nik.value.toString().length!=16){
          alert("NIK harus 16 digit")
        }
        else if(nohp.value.toString().length<10){
          alert("Nomor hp minimal 10 digit")
        }
        else{
          animasikan2();
          berhasilah.classList.remove('hidden')

        }
        
    }
    
     
        
        
     
    });
    okf.addEventListener('click',function(){
      ilangdonk2();
    }); 
    

    function animasikan2(){
      if(ab.classList.contains('kokjauh')){
        ab.removeEventListener('animationend',dump2)
        ab.classList.remove('kokjauh')
      }
      ab.classList.add('animated-element');
      
    }
    function setelahIlangdonkSelesai2() {
      berhasilah.classList.add('hidden');
      window.location.reload(true);
      window.location.href='index.html';
    }
    function ilangdonk2(){
      ab.classList.remove('animated-element');
      ab.classList.add('kokjauh')
      if(ab.classList.contains('kokjauh')&&!ab.classList.contains('animated-element'))
      ab.addEventListener('animationend', dump2);
    }
    function dump2(){
      ab.style.visibility = 'visible';
      ab.style.display = 'block';
      setelahIlangdonkSelesai2();
    }