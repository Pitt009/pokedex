function pokemon(nombre,color,puntos){
  this.nombre = nombre;
  this.color = color;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

}
var pokemones = [];
function crearPokemon() {
 var nombrePokemon = document.getElementById('nombrePokemon');
 var colorPokemon = document.getElementById('colorPokemon');
 var puntosDeAtaque = document.getElementById('puntosDeAtaque');

 var pokemon = new pokemon(nombrePokemon.value,
                      colorPokemon.value,
                      puntosDeAtaque.value)

pokemones.push(pokemon);

}
