
const buttonya = document.getElementById('buttonya')
function clicktemp(button){
    const id = document.getElementById(button.id)
    console.log()
    const tambahelemen = document.getElementById('spanchat');
    var elemenBaru = document.createElement("span");
      elemenBaru.className = "bg-black text-white w-fit maxw2 p-4 rounded-3xl self-end";
      var teksElemenBaru = document.createTextNode(id.textContent);
      elemenBaru.appendChild(teksElemenBaru)
      tambahelemen.appendChild(elemenBaru);
      buttonya.classList.add('hidden');
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-gray-800 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var teksElemenBaru = document.createTextNode(". . .");
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru);
    }, 500);
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-gray-800 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var isiText = (button.id=="buttA")?"Libhub adalah Aplikasi Perpustakaan berbasis Digital":
                      (button.id=="buttB")?"Jelas Berbayar":
                      (button.id=="buttC")?"Tinggal klik klik saja di hp atau laptop mu":
                      (button.id=="buttD")?"Dilempar":
                      (button.id=="buttE")?"Tunggu ya, menghubungkan mu dengan CS...":"";
        var teksElemenBaru = document.createTextNode(isiText);
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru);
        if(button.id!="buttE"){
            buttonya.classList.remove('hidden');
        }
        else{
            function getRandomInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var randomValue = getRandomInteger(1, 5);
            setTimeout(() => {
                var elemenBaru = document.createElement("span");
                elemenBaru.className = "bg-gray-800 text-white w-fit maxw2 p-4 rounded-3xl self-start";
                var isiText = (randomValue==1)?"Sardi":
                              (randomValue==2)?"Riady":
                              (randomValue==3)?"Seno":
                              (randomValue==4)?"Arpan":
                              (randomValue==5)?"Joko":"";
                var teksElemenBaru = document.createTextNode("Kamu terhubung dengan CS a.n Kak "+isiText);
                elemenBaru.appendChild(teksElemenBaru)
                tambahelemen.appendChild(elemenBaru);
            }, 5000);
        }
    }, 1000);
}



function wowilang(){
    aa.classList.remove('show')
    aa.classList.remove('maju')
    setTimeout(() => {
        
        window.location.reload(true);
      }, 500);
}
  const aa = document.querySelector('.containerpesan')
  function wow(){
    aa.classList.toggle('maju')
      
      setTimeout(() => {
        aa.classList.toggle('show')
      }, 0);
  }