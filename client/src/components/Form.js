import React from 'react';
import './Form.css';
// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. Si usas el hook `useDispatch` no funcionaran los test.

export default function Form() {
  const [input, setInput] = React.useState({
    name: "",
    description: "",
    released: "",
    rating: "",
  })
  const [errors, setErrors] = React.useState({});
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))

  }
  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "name is required";
    }
    if (!input.description) {
      errors.description = "description is required";
    }
    return errors;
  }


  const [platform, setPlatform] = React.useState({
    xbox: false,
    playstation: false,
    pc: false,

  })
  const handlePlatform = (e) => {
    setPlatform({
      ...platform,
      [e.target.name]: e.target.checked
    })
  }
  const [genre, setGenre] = React.useState({
    action: false,
    shooter: false,
    adventure: false,

  })
  const handleGenre = (e) => {
    setGenre({
      ...genre,
      [e.target.name]: e.target.checked
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    let plataformas = []
    for (const prop in platform) {
      if (platform[prop]) {
        plataformas.push(prop)
      }
    }
    let generos = []
    for (const prop in genre) {
      if (genre[prop]) {
        generos.push(prop)
      }
    }
    console.log(plataformas)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...input, genrs: generos, platform: plataformas
      })
    };
    fetch('http://localhost:3001/videogame', requestOptions)

  }

  return (

    <form className="formAdd" onSubmit={(e) => handleSubmit(e)}>
      <label >name</label>
      {errors.name && (<p className="danger">{errors.name}</p>)}

      <input
        className={`${errors.name && 'danger'}`}
        name="name"
        onChange={handleInputChange}
      />
      <label >description</label>

      {errors.description && (<p className="danger">{errors.description}</p>)}
      <textarea
        className={`${errors.description && 'danger'}`}

        name="description"
        onChange={handleInputChange}
      ></textarea>

      <label >release date</label>
      <input
        name="released"
        onChange={handleInputChange}
      ></input>


      <label>rating</label>
      <input
        name="rating"
        onChange={handleInputChange}
      ></input>
      <label>platform</label>
      <div>
        <label >
          <input
            onChange={handlePlatform}
            type="checkbox"
            name="pc" />
          PC
          </label>
        <label >
          <input
            onChange={handlePlatform}
            type="checkbox"
            name="playstation" />
          playstation
          </label>
        <label >
          <input
            onChange={handlePlatform}
            type="checkbox"
            name="xbox" />
          xbox
          </label>
      </div>
      <label>genres</label>
      <div>

        <label >
          <input
            onChange={handleGenre}
            type="checkbox"
            name="action" />
          action
          </label>
        <label >
          <input
            onChange={handleGenre}
            type="checkbox"
            name="shooter" />
          shooter
          </label>
        <label >
          <input
            onChange={handleGenre}
            type="checkbox"
            name="RPG" />
          RPG
          </label>
      </div>

      <button
        type="submit"
        onChange={handleInputChange}
      >Submit</button>
    </form>
  );

}




