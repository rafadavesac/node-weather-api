import express from 'express'
import axios from 'axios'

const app = express()
const port = 3000


app.set("view engine", "ejs")

//Arquivos estáticos — diz pro Express servir CSS/imagens da pasta public:
app.use(express.static("public"))

//Leitura de formulários — permite ler o que o usuário digitou no formulário via req.body:
app.use(express.urlencoded({extended: true}))


function getCondition(code) {
    if (code === 0) return "☀️ Céu limpo";
    if (code <= 3) return "⛅ Nublado";
    if (code <= 67) return "🌧️ Chuva";
    if (code <= 77) return "❄️ Neve";
    if (code <= 99) return "⛈️ Tempestade";
}

app.get("/", (req, res) => {
     res.render("index.ejs", { weather: null, error: null })
})

app.post("/weather", async (req, res) => {
    const cityName = req.body.city
    try{
    const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`)

    if (!response.data.results){
        return res.render("index.ejs", { weather: null, error: "Cidade não encontrada!" })
    }
    const lat = response.data.results[0].latitude
    const long = response.data.results[0].longitude
    
    const response2 = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)

    const weather = {
        temperature : response2.data.current_weather.temperature,
        condition: getCondition(response2.data.current_weather.weathercode),
        is_day: response2.data.current_weather.is_day,
        bgClass: response2.data.current_weather.is_day == 1 ? "dia" : "noite"
    }

    res.render("index.ejs", {weather, error:null})
    } catch (error){
        res.render("index.ejs", {weather:null, error:error})
    }
    
})

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
})