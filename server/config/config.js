// Puerto
process.env.PORT = process.env.PORT || 3000;

//entorno puede ser desarrollo o producción
process.env.MODE_ENV = process.env.MODE_ENV || 'dev';

//base de datos
let urlDB;

if (process.env.MODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafeuser:IjG5AOF3qwixbuJI@cluster0-5shwu.mongodb.net/cafe';
}

process.env.URL_DB = urlDB;