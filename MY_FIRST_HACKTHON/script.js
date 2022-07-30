 //POKEMON
 
 /*
var div=document.createElement("div");
div.innerHTML=`<input type="text id="txt">
<button type="button" id="btn" onClick="fun()">Search</button> `;
div.style.textAlign="center";
document.body.append(div);
*/

const pokemon_container=document.querySelector('.pokemon_container');
var mydata="";



 //function fetch id
 async function fetchpokemon(id)
 {
   try{
    let res=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
     .then(res => res.json())
     .then(data => createpokemon(data));
    
    //.then(data =>console.log(data));
   }
   catch(err){
     console.log("fetchpokemon Error >>"+err);
   } 
 }
 
 
function fetchpokemons(number)
{
   for(let i=1 ; i<=number; i++) 
   {
        fetchpokemon(i);
   }
}
fetchpokemons(50);
 
 
function createpokemon(pokemon)
{
    const card = document.createElement('div');
    card.classList.add('pokemon_block');

    const spcontainer=document.createElement('div');
    spcontainer.classList.add('img_container');
     
    const sp_one=document.createElement('img');
    sp_one.src=pokemon.sprites.front_default;
    spcontainer.appendChild(sp_one);

    const number=document.createElement('p');
    number.textContent=`#${pokemon.id.toString().padStart(3,0)}`;

     const name=document.createElement('p');
     name.classList.add('name');
     name.textContent=pokemon.name;

     const kg=document.createElement('p');
     kg.classList.add('card_text');
     kg.textContent=pokemon.weight;
     
     const mov=document.createElement('p');
     mov.classList.add('newcard_text');
     var myability="";
     for(var i=0;i<pokemon.abilities.length;i++){
         myability= myability+pokemon.abilities[i].ability.name+",";
         //console.log("Ability Names >>>"+myability); 
     }
     myability=myability.slice(0,myability.length-1);
     myability="Abilities : "+myability;
     //console.log("Ability Names >>>"+myability);
     var mymoves=pokemon.moves[0].move.name;
     mymoves="Moves : "+mymoves;
     //console.log("Moves >>"+mymoves);
      
     mov.textContent=myability;
     const move=document.createElement('p');
     move.classList.add('newcard_text1');
     move.textContent=mymoves;
     
     card.appendChild(spcontainer);
     card.appendChild(number);
     card.appendChild(name);
     card.appendChild(kg);
     card.appendChild(mov);
     card.appendChild(move);
     pokemon_container.appendChild(card);



}



















    



