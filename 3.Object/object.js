let buah = {
    nama: 'Mangga',
   warna: 'Hijau',
   harga: '5000',

};

let sayur = new Object();
sayur.nama = 'Kangkung';
sayur.harga = 2000;
sayur.jenis = 'Daun Hijau'

console.log(buah);
console.log(sayur);

console.log(buah.warna); //dot notation
console.log(buah.harga); // notasi titik
console.log(buah["nama"]); // keranjang/brack


const smartphone = {
    kamera: "10 MP",
    memori: "128 GB",
} 

const fitur = "kamera";

// console.log(smartphone.kamera);
// console.log(smartphone["kamera"]);
// console.log(smartphone[fitur]);

smartphone.merek = "ipong";
console.log(smartphone);
smartphone['layar'] = "Amoled";

delete smartphone.memori;
delete smartphone["layar"]

console.log(smartphone);