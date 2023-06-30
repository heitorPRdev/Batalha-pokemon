


//Rattata
const vidaInimigo = document.getElementById('vida-inimigo')
let vidaRattataIni = 100

//Sharmander
const vidaPokemon = document.getElementById('vida-pokemon')
const attack1 = document.getElementById('attack1')
const attack2 = document.getElementById('attack2')
const attack3 = document.getElementById('attack3')
const attack4 = document.getElementById('attack4')
let vidaPokemonIni = 100
const sharmander_Attack = [22,16,16,16]
//se clicar nos ids
vidaInimigo.innerHTML = vidaRattataIni
vidaPokemon.innerHTML = vidaPokemonIni
attack1.addEventListener('click',()=>{
    vidaRattataIni -= sharmander_Attack[0]
    vidaInimigo.innerText = vidaRattataIni
    vidaPokemonIni -= 15
    vidaPokemon.innerText = vidaPokemonIni
    
    if(vidaRattataIni <=0){
        window.open('/vencedor/','_self')
    }
    if(vidaPokemonIni <= 0){
        window.open('/Vencerdor_rattata/','_self')
    }
    
    
})

attack2.addEventListener('click',()=>{
    vidaRattataIni -= sharmander_Attack[1]
    vidaInimigo.innerText = vidaRattataIni
    vidaPokemonIni -= 15
    vidaPokemon.innerText = vidaPokemonIni
    if(vidaRattataIni <=0){
        window.open('/vencedor/','_self')
    }
    if(vidaPokemonIni <= 0){
        window.open('/Vencerdor_rattata/','_self')
    }
    
})

attack3.addEventListener('click',()=>{
    vidaRattataIni -= sharmander_Attack[2]
    vidaInimigo.innerText = vidaRattataIni
    vidaPokemonIni -= 25
    vidaPokemon.innerText = vidaPokemonIni
    if(vidaRattataIni <=0){
        window.open('/vencedor/','_self')
    }
    if(vidaPokemonIni <= 0){
        window.open('/Vencerdor_rattata/','_self')
    }
    
})

attack4.addEventListener('click',()=>{
    vidaRattataIni -= sharmander_Attack[3]
    vidaInimigo.innerText = vidaRattataIni
    vidaPokemonIni -= 20
    vidaPokemon.innerText = vidaPokemonIni
    
    if(vidaRattataIni <=0){
        window.open('/vencedor','_self')
    }
    if(vidaPokemonIni <= 0){
        window.open('/Vencerdor_rattata/','_self')
    }
    
})
