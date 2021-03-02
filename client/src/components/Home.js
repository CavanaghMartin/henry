import { connect } from "react-redux";
import { getVideogamesdetail, getVideogames } from '../actions';
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import './Home.css';
import './NavBar.css';
import NavBar from './NavBar';
function Home(props) {
  const [imgn, setImgn] = React.useState({
    src: ""
  })
  useEffect(() => {
    props.getVideogames("")

  }, [])
  let thumbnails = document.getElementsByClassName('thumbnail')
  let activeImages = document.getElementsByClassName('active')

  useEffect(() => {
    console.log("hizo useffect")
    setImgn({
      src: ""
    })
    function seteaEvent() {
      console.log("activo evento")
      if (activeImages.length > 0) {
        activeImages[0].classList.remove('active')
      }
      this.classList.add('active')
      document.getElementsByClassName('featured').src = this.src
      setImgn({
        src: this.src
      })
    }
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('mouseover', seteaEvent);
    }
    return () => {

      for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].removeEventListener('mouseover', seteaEvent);
      }

    }
  }, [props.pageLoaded]);

  return (

    <div className="home">
      <NavBar />
      <Pagination className="pagination" />
      <div className="contenedor">
        {
          props?.pageLoaded.length === 0 ? <h1>no hay resultados</h1> :
            props.pageLoaded.map(videogame => (

              <div className="card" onClick={() => console.log(234)} >
                {videogame.screenshots[0]?.image ?
                  <img className="featured"
                    src={
                      imgn.src !== "" ?
                        imgn.src :
                        videogame.screenshots[0].image
                      }
                    alt="" height="400" /> :
                  <h4>no tiene imagen</h4>
                }
                <div className="info">
                  <h3>{videogame.name}</h3>
                  <p>
                    {videogame.genrs ?
                      videogame.genrs.map(g => <span>{g + ","}</span>) :
                      <h4>no tiene genero</h4>
                    }
                  </p>
                  <button className="boton" onClick={() => props.getVideogamesdetail(videogame?.id)} >
                    <Link to={`/detail/${videogame?.id}`}>Detalles</Link>
                  </button>
                  <p     margin-bottom="auto">
                    {
                      videogame?.screenshots ?
                        videogame.screenshots.map(s => {
                          return <img className="thumbnail" src={s?.image} alt="" height="80" />
                        })
                        : <p>no tiene screenshots</p>
                    }
                  </p>
                </div>
              </div>))

        }
      </div>
      {

        props.pageLoaded.map(videogame => {
          return <div>
            <img width="100%" alt="aasd" src={videogame.background_image}></img>
          </div>

        })
      }
    </div>

  );
}

function mapStateToProps(state) {
  return {
    videogames: state.videogamesLoaded,
    pageLoaded: state.pageLoaded
  }
}


export default connect(mapStateToProps, { getVideogames, getVideogamesdetail })(Home);
