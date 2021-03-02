var fetch = require('isomorphic-fetch');
const { Videogame, Genre } = require('../db');
const { Router } = require('express');
//pruebo el body
const bodyparser = require('body-parser');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(bodyparser.urlencoded({ extended: true }));

router.get('/videogames', function (req, res) {
    let games;
    //busca juegos atraves de la query /videogames?name=...
    const { name } = req.query
    //if (name) {
    Videogame.findAll({
        where: { name }
    })
        .then(resp => {
            games = resp

        })
    fetch(`https://api.rawg.io/api/games?search=${name}`)
        .then(response => response.json())
        .then(result => {
            try {
                if (result.results.length === 0) {
                    console.log("result.results")
                    return res.send("No existe ningun videojuego con ese nombre")
                }
                let arrayLimited = [];
                for (let index = 0; index < 15; index++) {
                    const { short_screenshots,name, genres, background_image, id, platforms, rating } = result.results[index]
                    const plats = platforms.map(p => p.platform.name)
                    const genrs = genres.map(g => g.name)
                    let screenshots=[]
                    for (let index = 1; index < 7; index++) {
                       screenshots.push(short_screenshots[index])
                        
                    }
                    arrayLimited.push({screenshots, name, genrs, background_image, id, plats, rating });
                }
                const videogames = [...games, ...arrayLimited]
                res.send(videogames)
                
            } catch (error) {
               // console.log({Error:error})
                res.send([...games])

            }

        })
})

router.get('/videogame/:idVideogame', function (req, res) {
    const { idVideogame } = req.params;
    let game;
    Videogame.findByPk(idVideogame)
        .then(resp => {
            game = resp
            return res.send(game)

        })
    if (!game) {
        fetch(`https://api.rawg.io/api/games/${idVideogame}`)
            .then(response => response.json())
            .then(result => {
                let {background_image_additional,clip, rating,name, genres, released, platforms, background_image, description } = result;
                let genrs = genres.map(g => g.name)
                let platform = platforms.map(p => p.platform.name)
                3
                res.send({background_image_additional,clip, rating,name, genrs, released, platform, background_image, description })
            })

    }
})
router.get('/genres', async function (req, res) {
    fetch("https://api.rawg.io/api/genres")
        .then(resp => resp.json())
        .then(result => {
            let genres = result.results.map(r => r.name)
            //mapeo a string
            genres.forEach(genr => {
                //por cada uno encuentra o lo crea en la db
                Genre.findOrCreate({
                    where: {
                        name: genr
                    }
                })
            });
        })
    Genre.findAll()
        .then(DbGenres => res.send(DbGenres))

})

router.post('/videogame', async function (req, res) {
    //console.log(req.body)
    try {

        await Videogame.create({
            ...req.body
        });
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;
