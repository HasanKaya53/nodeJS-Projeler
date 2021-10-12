
/*
    Express Modulü sayfaya gelen isteklerin yönetilmesini sağlar.
*/

// öncelikle projemize expressi dahil ediyor ve herhangi bir değişkende bu ürettiğimiz nesneyi saklıyoruz. sonrasında bu değişkenle isteklerimizi yöneteceğiz.
const express = require('express');
const app = express();


// basit isteklerin get ve post methoduyla yönetilmesi
app.get('/', (req, res) => {
    res.send("İstek Geldi");
    // Test url: http://localhost:3000/
})

app.post('/', (req, res) => {
    res.send("Postmanle test edilirse bu mesaj ekrana çıkacaktır.");
})

// parametreli isteklerin yönetilmesi
app.get('/mesajYaz/:ad/:soyad',(req,res)=>{
    const ad = req.params.ad; //ad parametresini alıyorum
    const soyad = req.params.soyad; //soyad parametresini alıyorum
    res.send("Hoşgeldin "+ad+" "+soyad)
    // Test url: http://localhost:3000/mesajYaz/hasan/kaya
})

// uygulama portunu dinliyoruz.
app.listen(3000)