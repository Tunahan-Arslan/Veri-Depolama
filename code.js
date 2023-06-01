// sayfa yüklendiğinde, kaydedilmiş verileri yükle ve textarea içine yazdır
  var kaydedilenVeriler=[]
window.onload = function () {

  for(var i=0;i<localStorage.length;i++){
    kaydedilenVeriler=[...kaydedilenVeriler,localStorage.getItem("kaydedilenVeriler"+i)]

  }

  

  if (kaydedilenVeriler !== null||kaydedilenVeriler.length>0) {
    document.getElementById("kaydedilenVeriler").value = kaydedilenVeriler.join("\n---------\n");
  }
}
function ekleme() {
  // input elemanlarındaki verileri textarea elemanına aktar ve kaydet
  var inputElemanlari = document.querySelectorAll("input");
  var kaydetButton = document.getElementById("kaydet");

    var girdilerTextArea = document.getElementById("kaydedilenVeriler");
    var girdiDizisi = [];

    for (var i = 0; i < inputElemanlari.length; i++) {
      girdiDizisi.push(inputElemanlari[i].value);
    }
    var girdilerMetni = girdiDizisi.join("\n");
    //girdilerTextArea.value = girdilerMetni;
   
    console.log("kaydedilenVeriler"+localStorage.length)
    localStorage.setItem("kaydedilenVeriler"+localStorage.length, girdilerMetni);
    alert("Veriler kaydedildi!");
    window.location.reload()
  }
function silme() {
  // kaydedilen verileri sil
  var silButton = document.getElementById("sil");
    //localStorage.removeItem("kaydedilenVeriler");
    localStorage.clear()
    document.getElementById("kaydedilenVeriler").value = "";
    alert("Tüm veriler silindi!");
  }