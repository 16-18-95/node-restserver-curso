//======================
//Puerto
//======================

process.env.PORT = process.env.PORT || 3000;


//======================
//Entorno
//======================


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//======================
//Base de datos
//======================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://161895:E4k6zKbnFKqAdApG@cluster0-jxhgp.mongodb.net/cafe';
}
process.env.urlDB = urlDB;