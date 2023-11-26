var isiKeranjang=localStorage.getItem("isiKeranjang");
const booksData = fetch("buku.json")

    .then(response => response.json())
    .then(data => data.books);
const Keranjang=localStorage.getItem('arrayData');

console.log(isiKeranjang);



function fetch(){
    const cart=document.querySelector("#isi");
    var tampil=JSON.parse(localStorage.getItem('arrayData'));
    const a=document.createElement("span");
    a.innerHTML=`<span class="text-gray-600">(${isiKeranjang} items)</span>`
    cart.append(a)
    if(isiKeranjang==0){
        
    }
    for (let i =0;i<isiKeranjang;i++){
        console.log(tampil[i])
    }
}
