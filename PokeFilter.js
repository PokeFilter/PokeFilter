var currentType;
var currentGen = 0;
var lastChanged;
var resultList = [];
var showAll = false;
var alpha = true;

function handleClearButtonClick(){
    currentType = null;
    currentGen = 0;
    lastChanged = null;
    resultList = [];
    var buttons = document.querySelectorAll('.genbutton');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    var buttons = document.querySelectorAll('.typebutton');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    setTimeout(() => {
        displayPokemon();
    }, 500);
}

function handleTypeButtonClick(type, button){
    resultList = [];
    currentType = null;

    setTimeout(() => {
        displayPokemon();
    }, 500);

    var buttons = document.querySelectorAll('.typebutton');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    currentType = type;
    getData(type);
    setTimeout(() => {
        displayPokemon();
    }, 500);
}

function handleGenButtonClick(gen, button){
   
    setTimeout(() => {
    }, 500);
    currentGen = 0;
    
    var buttons = document.querySelectorAll('.genbutton');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    currentGen = gen;
    console.log(gen);
    console.log(currentGen);


    setTimeout(() => {
        displayPokemon();
    }, 500);
}

async function getData(type) {
    currentType = type;
    const url = "https://pokeapi.co/api/v2/type/" + type;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      var json = await response.json();
      
    } catch (error) {
      console.error(error.message);
    }
    
    var pokeList = json["pokemon"];
    var typeName = json["name"];
    

    for (let i=0; i<pokeList.length; i++){
        var pokeNumber = (pokeList[i]["pokemon"]["url"].split("/")[6]);
        var pokeName = pokeList[i]["pokemon"]["name"];
        // var speciesParts = json["species"]["url"].split("/");
        // var speciesNum = speciesParts[speciesParts.length - 2];
        if (pokeNumber > 10000){
            const url2 = "https://pokeapi.co/api/v2/pokemon/" + pokeNumber;
            try {
                const response = await fetch(url2);
                if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
                }
            
                var pokejson = await response.json();
                
              } catch (error) {
                console.error(error.message);
              }
            var speciesParts = pokejson["species"]["url"].split("/");
            var speciesNum = speciesParts[speciesParts.length - 2];
            console.log(pokeName + " " + speciesNum);
        }
        else{
            speciesNum = pokeNumber;
        }
        const tempPoke = {
            name: pokeName.charAt(0).toUpperCase() + pokeName.slice(1),
            number: pokeNumber,
            speciesNumber: speciesNum,
        }
        resultList.push(tempPoke);
    }
    console.log(resultList);
    const objectList = document.getElementById('objectList');
}

function displayPokemon(){
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output
    var entryColour = 1;

    resultList.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    resultList.forEach(obj => {
        const objText = `${capitalizer(obj.name)}`;
        
        const pokeEntry = document.createElement('div');
       
        const desc = document.createTextNode(objText);

        const img = document.createElement("img");
        img.classList.add("pokeSprite");
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + obj.number + ".png";
        // p.textContent = objText;
        if (currentGen == 0){
            pokeEntry.appendChild(img);
            pokeEntry.appendChild(desc);
            outputDiv.appendChild(pokeEntry);
            if (entryColour == 1){
                pokeEntry.classList.add("pokeEntry");
                entryColour = 2;
            }
            else{
                pokeEntry.classList.add("pokeEntry2");
                entryColour = 1;
            }
        }
        else if (currentGen == 1){
            if (obj.speciesNumber < 152){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
        else if (currentGen == 2){
            if (obj.speciesNumber > 151 && obj.speciesNumber < 252){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
        else if (currentGen == 3){
            if (obj.speciesNumber > 251 && obj.speciesNumber < 387){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
        else if (currentGen == 4){
            if (obj.speciesNumber > 386 && obj.speciesNumber < 494){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
        else if (currentGen == 5){
            if (obj.speciesNumber > 493 && obj.speciesNumber < 650){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
        else if (currentGen == 6){
            if (obj.speciesNumber > 649 && obj.speciesNumber < 722){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
        else if (currentGen == 7){
            if (obj.speciesNumber > 721 && obj.speciesNumber < 810){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
        else if (currentGen == 8){
            if (obj.speciesNumber > 809 && obj.speciesNumber < 906){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
        else if (currentGen == 9){
            if (obj.speciesNumber > 905 && obj.speciesNumber < 1026){
                pokeEntry.appendChild(img);
                pokeEntry.appendChild(desc);
                outputDiv.appendChild(pokeEntry);
                if (entryColour == 1){
                    pokeEntry.classList.add("pokeEntry");
                    entryColour = 2;
                }
                else{
                    pokeEntry.classList.add("pokeEntry2");
                    entryColour = 1;
                }
            }
        }
       
    });
}

function capitalizer(name){
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
}
