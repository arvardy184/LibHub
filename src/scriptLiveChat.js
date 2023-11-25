
const buttonya = document.getElementById('buttonya')
const tambahelemen = document.getElementById('spanchat');
var scrollContainer = document.getElementById('chatcontent');
var autoTengah = document.getElementById('containerpesan');

function clicktemp(button){
    const id = document.getElementById(button.id)
    
    var elemenBaru = document.createElement("span");
      elemenBaru.className = "bg-black text-white w-fit maxw2 p-4 rounded-3xl self-end";
      var teksElemenBaru = document.createTextNode(id.textContent);
      elemenBaru.appendChild(teksElemenBaru)
      tambahelemen.appendChild(elemenBaru);
      buttonya.classList.add('hidden');
      scrollContainer.scrollTop=scrollContainer.scrollHeight
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
        scrollContainer.scrollTop=scrollContainer.scrollHeight
        if(button.id!="buttE"){
            buttonya.classList.remove('hidden');
        }
        else{
            function getRandomInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var randomValue = getRandomInteger(1, 5);
            var isiText = (randomValue==1)?"Dani":
                              (randomValue==2)?"Riady":
                              (randomValue==3)?"Seno":
                              (randomValue==4)?"Arpan":
                              (randomValue==5)?"Zidan":"";
            setTimeout(() => {
                var elemenBaru = document.createElement("span");
                elemenBaru.className = "bg-gray-800 text-white w-fit maxw2 p-4 rounded-3xl self-start";
                
                var teksElemenBaru = document.createTextNode("Kamu terhubung dengan CS a.n Kak "+isiText);
                elemenBaru.appendChild(teksElemenBaru)
                tambahelemen.appendChild(elemenBaru);
                scrollContainer.scrollTop=scrollContainer.scrollHeight
            }, 500);
            setTimeout(() => {
                var elemenBaru = document.createElement("span");
                elemenBaru.className = "bg-blue-600 text-white w-fit maxw2 p-4 rounded-3xl self-start";
                var teksElemenBaru = document.createTextNode("Halo dengan "+isiText+" disini, Ada yang bisa saya bantu?");
                elemenBaru.appendChild(teksElemenBaru)
                tambahelemen.appendChild(elemenBaru);
                scrollContainer.scrollTop=scrollContainer.scrollHeight
                classlive.classList.remove('hidden')
                classpesan.classList.remove('hidden')
            }, 500);
        }
        scrollContainer.scrollTop=scrollContainer.scrollHeight
    }, 500);
}
const classlive=document.getElementById('classlive')
const classpesan=document.getElementById('classpesan')
const texta=document.getElementById('texta')


function kirimpesan(){
    if(texta.value.trim()!=""){
    var elemenBaru = document.createElement("span");
    elemenBaru.className = "bg-green-600 text-white w-fit maxw2 p-4 rounded-3xl self-end";
     var teksElemenBaru = document.createTextNode(texta.value);
    elemenBaru.appendChild(teksElemenBaru)
    tambahelemen.appendChild(elemenBaru);
    scrollContainer.scrollTop=scrollContainer.scrollHeight
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-blue-600 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var teksElemenBaru = document.createTextNode(". . .");
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru);  
        scrollContainer.scrollTop=scrollContainer.scrollHeight  
    }, 200);
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-blue-600 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var teksElemenBaru = document.createTextNode("Ini adalah Jawaban");
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru);   
        scrollContainer.scrollTop=scrollContainer.scrollHeight 
    }, 500);
    texta.value="" 
    }
    
    
}
function keluarlive(){
    var elemenBaru = document.createElement("span");
    elemenBaru.className = "bg-green-600 text-white w-fit maxw2 p-4 rounded-3xl self-end";
    var teksElemenBaru = document.createTextNode("Keluar dari Live Chat");
    elemenBaru.appendChild(teksElemenBaru)
    tambahelemen.appendChild(elemenBaru);
    scrollContainer.scrollTop=scrollContainer.scrollHeight
    setTimeout(() => {
        var elemenBaru = document.createElement("span");
        elemenBaru.className = "bg-blue-600 text-white w-fit maxw2 p-4 rounded-3xl self-start";
        var teksElemenBaru = document.createTextNode("Terima kasih telah menggunakan layanan Live Chat");
        elemenBaru.appendChild(teksElemenBaru)
        tambahelemen.appendChild(elemenBaru); 
        scrollContainer.scrollTop=scrollContainer.scrollHeight
    }, 400);
    setTimeout(() => {
        buttonya.classList.remove('hidden');
        classlive.classList.add('hidden')
        classpesan.classList.add('hidden')
        scrollContainer.scrollTop=scrollContainer.scrollHeight
    }, 500);
    
}
function wowilang(){
    aa.classList.remove('show')
    aa.classList.remove('maju')
    setTimeout(() => {
        texta.value=""
        tambahelemen.innerHTML=""
      }, 500);
}
  const aa = document.querySelector('.containerpesan')
  function wow(){
    tambahelemen.innerHTML=`<span class=" bg-gray-800 text-white w-fit maxw2 p-4 rounded-3xl self-start">
    Ada yang bisa saya bantu?
    </span>`
    classlive.classList.add('hidden')
    classpesan.classList.add('hidden')
    buttonya.classList.remove('hidden');
    aa.classList.toggle('maju')
    autoTengah.scrollTop=autoTengah.scrollHeight/6;
      setTimeout(() => {
        aa.classList.toggle('show')
      }, 0);
  }
  document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('[data-accordion-target]');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-accordion-target');
            const targetElement = document.querySelector(targetId);

            // Toggle the visibility of the target element
            targetElement.classList.toggle('hidden');
        });
    });
});