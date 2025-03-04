async function obtenerPokemonsTipoLucha() {
    try {
        // Hacemos la petición a la PokeAPI para obtener los Pokémon de tipo lucha
        const respuesta = await fetch("https://pokeapi.co/api/v2/type/water");
        const datos = await respuesta.json();

        // Seleccionamos el contenedor donde se mostrarán los Pokémon
        const container = document.getElementById("pokemon-container");

        // Tomamos solo los primeros 10 Pokémon para evitar una lista demasiado larga
        const listaPokemons = datos.pokemon.slice(0, 20);

        for (let i = 0; i < listaPokemons.length; i++) {
            const pokemon = listaPokemons[i].pokemon;

            // Hacemos otra petición para obtener más información del Pokémon
            const respuestaPokemon = await fetch(pokemon.url);
            const datosPokemon = await respuestaPokemon.json();
            console.log(datosPokemon)

            // Creamos los elementos del DOM
            const card = document.createElement("div");
            card.style.border = "1px solid black";
            card.style.padding = "10px";
            card.style.margin = "10px";
            card.style.display = "inline-block";
            card.style.textAlign = "center";

            const nombre = document.createElement("h2");
            nombre.textContent = datosPokemon.name;

            const experience = document.createElement("p");
            experience.textContent = `Experience: ${datosPokemon.base_experience}`;

            const imagen = document.createElement("img");
            imagen.src = datosPokemon.sprites.front_default;
            imagen.alt = datosPokemon.name;

            // Agregamos los elementos a la tarjeta y luego al contenedor
            card.appendChild(nombre);
            card.appendChild(imagen);
            card.appendChild(experience);
            container.appendChild(card);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Llamamos a la función para obtener los Pokémon de tipo lucha
obtenerPokemonsTipoLucha();
