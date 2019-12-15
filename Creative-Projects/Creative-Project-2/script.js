
/*---------------------- Tutorial for single random Pokemon ----------*/
document.getElementById("randomPokemon").addEventListener("click", function(event) {
    event.preventDefault();
    var value = randomPokemon();
    console.log(value);
    const url = "https://pokeapi.co/api/v2/pokemon/" + value;
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);		
        let results = "";
        results += '<h2 class="text-center m-1 mt-3 mb-3">' + capitalize(json.name) +"</h2>";
        results += '<img class="rounded mx-auto d-block" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ value +'.png"/>';
            results += '<p class="text-center"> Type(s): '
          for(var i=0; i<json.types.length; i++){
            if ((i+1) == json.types.length){
              results += capitalize(json.types[i].type.name);
            }
            else {
              results += capitalize(json.types[i].type.name) + ', ';
            }
          }
            
          results += "</p>";
          results += '<h4 class="text-center"> No. ' + value + '</h4>';
          results += '</div>'
        
        document.getElementById("pokemonResults").innerHTML = results;

        document.getElementById("footer").style.position = "absolute";

      })
});


/*---------------------- Find a type -----------------------*/
document.getElementById("findType").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("typeInput").value;
    console.log(value);

    if (value === ""){
      var error = '<h2 class="text-center m-1 mt-3"> Please enter a city </h2>'
      document.getElementById("typeInput").innerHTML = error;
      return;
    }
    console.log(value);
    const url = "https://pokeapi.co/api/v2/type/" + value.toLowerCase();
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);		
        let results = "";
        results += '<h2 class="text-center m-1 mt-3 mb-3">Type: ' + capitalize(json.name) +"</h2>";
        results += '<div class="container mb-3">';
        results += '<div class="row align-items-center m-1">'
        for(let q=0; q < json.pokemon.length; q++){
          var object = json.pokemon[q];
          if (q % 5 == 0) {
            results += '</div>'
            results += '<div class="row align-items-center m-1">'
          }
          results += '<div class="col-sm text-center">'
            results += '<p class="text-center">'
            results += capitalize(object.pokemon.name);
            results += "</p>";
            results += '</div>'
        }
        results += '</div>'
        results += '</div>'
        document.getElementById("pokemonResults").innerHTML = results;
        document.getElementById("footer").style.position = "relative";
      })
});

function randomNumber(){
  return Math.floor(Math.random() * 1234567) % 18
};

function randomPokemon(){
  return Math.floor(Math.random() * 1234567) % 807
};

function capitalize(name){
  return name.charAt(0).toUpperCase() + name.slice(1)
};