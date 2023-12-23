function hitungPeringkat() {
    // Ambil nilai input dari form untuk setiap helm
    const hargaA = parseFloat(document.getElementById('hargaA').value);
    const kualitasA = parseFloat(document.getElementById('kualitasA').value);
    const keamananA = parseFloat(document.getElementById('keamananA').value);

    const hargaB = parseFloat(document.getElementById('hargaB').value);
    const kualitasB = parseFloat(document.getElementById('kualitasB').value);
    const keamananB = parseFloat(document.getElementById('keamananB').value);

    const hargaC = parseFloat(document.getElementById('hargaC').value);
    const kualitasC = parseFloat(document.getElementById('kualitasC').value);
    const keamananC = parseFloat(document.getElementById('keamananC').value);

    const hargaD = parseFloat(document.getElementById('hargaD').value);
    const kualitasD = parseFloat(document.getElementById('kualitasD').value);
    const keamananD = parseFloat(document.getElementById('keamananD').value);

    const hargaE = parseFloat(document.getElementById('hargaE').value);
    const kualitasE = parseFloat(document.getElementById('kualitasE').value);
    const keamananE = parseFloat(document.getElementById('keamananE').value);

    // Berikan bobot untuk setiap kriteria
    const bobotHarga = 0.4;
    const bobotKualitas = 0.3;
    const bobotKeamanan = 0.3;

    // Hitung peringkat untuk setiap helm
    const peringkatA = (hargaA * bobotHarga) + (kualitasA * bobotKualitas) + (keamananA * bobotKeamanan);
    const peringkatB = (hargaB * bobotHarga) + (kualitasB * bobotKualitas) + (keamananB * bobotKeamanan);
    const peringkatC = (hargaC * bobotHarga) + (kualitasC * bobotKualitas) + (keamananC * bobotKeamanan);
    const peringkatD = (hargaD * bobotHarga) + (kualitasD * bobotKualitas) + (keamananD * bobotKeamanan);
    const peringkatE = (hargaE * bobotHarga) + (kualitasE * bobotKualitas) + (keamananE * bobotKeamanan);

    // Tampilkan hasil peringkat
    const hasilPeringkat = document.getElementById('hasilPeringkat');
    hasilPeringkat.innerHTML = `
        <p>Peringkat Helm A: ${peringkatA}</p>
        <p>Peringkat Helm B: ${peringkatB}</p>
        <p>Peringkat Helm C: ${peringkatC}</p>
        <p>Peringkat Helm D: ${peringkatD}</p>
        <p>Peringkat Helm E: ${peringkatE}</p>
    `;
}
