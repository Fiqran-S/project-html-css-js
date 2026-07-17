const display = document.getElementById('display');

function appendToDisplay(input) {
    // Celah Fix: Jika layar sedang memunculkan tulisan "Error", 
    // bersihkan layar dulu sebelum menulis angka baru
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Celah Fix: Memvalidasi string hanya boleh berisi angka dan operator matematika.
        // Ini mencegah eksekusi kode JavaScript berbahaya (XSS) melalui eval.
        const tokenKalkulator = /^[0-9.+\-*/\s]+$/;
        
        if (tokenKalkulator.test(display.value)) {
            // Menggunakan Function constructor sebagai alternatif eval yang lebih aman
            const hasil = new Function(`return ${display.value}`)();
            
            // Memastikan hasil pembagian dengan nol (Infinity) atau bukan angka (NaN) ditangkap sebagai Error
            if (hasil === Infinity || isNaN(hasil)) {
                display.value = "Error";
            } else {
                display.value = hasil;
            }
        } else {
            display.value = "Error";
        }
    }
    catch (error) {
        display.value = "Error";
    }
}