import { Pokemon } from "./models/Pokemon.js";

import { PokemonController } from "./controllers/PokemonController.js";

let pk = new PokemonController();

pk.Show().subscribe({
  next(data) {
    console.log("RESPUESTA NEXT");
    console.log(data);
  },
  error(error) {
    console.log("RESPUESTA ERROR");
    console.log(error);
  },
  complete() {
    console.log("RESPUESTA COMPLEATE");
  },
});

let dataSource = [];
let dataSoruceFilter = [];
let idxPaginator = 0;

async function getIndexPokemon() {
  try {
    const promesa = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const jsonRes = await promesa.json();
    const items = jsonRes.results;

    const results = await Promise.all(
      items.map(async (item) => {
        const promesaPokemon = await fetch(item.url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const jsonResPokemon = await promesaPokemon.json();
        const imgPokemon =
          jsonResPokemon.sprites.other["official-artwork"].front_default;
        const weightPokemon = jsonResPokemon.weight;

        return new Pokemon(item.name, weightPokemon, imgPokemon);
      })
    );

    dataSource = results;
    dataSoruceFilter = dataSource.pagination(12)[idxPaginator];

    drawPaginator(dataSource.pagination(12));
    drawPokemons(dataSoruceFilter);
  } catch (error) {
    console.log(error);
  }
}

document
  .getElementById("input-search")
  .addEventListener("keyup", function (event) {
    let restultado = [];

    if (this.value == "") {
      restultado = dataSoruceFilter = dataSource.pagination(12)[idxPaginator];
    } else {
      restultado = dataSource.filter((item) => {
        return (
          item.name.includes(this.value) ||
          `${item.weight}`.includes(this.value)
        );
      });
    }

    drawPokemons(restultado);
  });

getIndexPokemon();

function drawPaginator(pokemons) {
  const element = document.querySelector("#navbar-paginator");

  element.innerHTML = "";

  pokemons.forEach((_, index) => {
    element.innerHTML += `
      <input type="button" value="${index + 1}" class="btn-paginator"/>
              `;
  });

  const elementos = document.getElementsByClassName("btn-paginator");

  for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener("click", function () {
      // Código del evento click
      idxPaginator = this.value - 1;
      drawPokemons(
        (dataSoruceFilter = dataSource.pagination(12)[idxPaginator])
      );
      scrollToTop();
    });
  }
}

function drawPokemons(pokemons) {
  const element = document.querySelector("#main-body");

  element.innerHTML = "";

  pokemons.forEach((item) => {
    element.innerHTML += `
            <div class="pokemon-card">
            <div class="pokemon-card-img">
                <div class="pokemon-card-img-style" style="background-image: url(${item.img})"></div>
            </div>
            <div class="pokemon-card-body">
                <p>name: ${item.name}</p>
                <p>weight: ${item.weight}</p>
            </div>
            </div>
            `;
  });
}

function toggleAccordion(element) {
  const content = element.nextElementSibling;
  element.classList.toggle("active");
  content.classList.toggle("active");
}

function crearRango(inicio, fin) {
  const rango = [];
  for (let i = inicio; i <= fin; i++) {
    rango.push(i);
  }
  return rango;
}

Array.prototype.pagination = function (p) {
  let max = 1;
  let firstArr = [];

  for (let i = 0; i < Math.ceil(this.length / p); i++) {
    let secondArr = [];

    for (let i = (max - 1) * p; i < max * p; i++) {
      if (this[i] !== undefined) {
        secondArr.push(this[i]);
      } else {
        break;
      }
    }

    firstArr.push(secondArr);
    max += 1;
  }

  return firstArr;
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
