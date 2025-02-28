function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function temizle(){
    document.getElementById("display").value = "";
}
function hesapla() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        alert("Geçersiz işlem");
        temizle();
    }
}