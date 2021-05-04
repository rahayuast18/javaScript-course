const apakahLulus = (siswa) => {
    return new Promise((resolve, reject) => {
        if(siswa.nilai >= 70){
            resolve(`${siswa.nama} lulus!`);
        }else{
            reject(`${siswa.nama} tidak lulus`);
        }
    });
}
 
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}
 
const daftarSiswa = [
    {
        nama: "Aris Nur Subekti",
        nilai: 80
    },
    {
        nama: "Jek",
        nilai: 60
    },
    {
        nama: "Budi",
        nilai: 85
    }
];

for (siswa of daftarSiswa){
    apakahLulus(siswa).then(handleSuccess, handleFailure);
}