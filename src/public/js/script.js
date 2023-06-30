//propriedade  do sharmander
const sharmander_info = {nome:'Sharmander',
                         tipo:'fogo',
                         fraco:'água, chão e pedra',
                         vida:100,
                         attack:70
}
//propriedades do Bulbasaur
const bulbasaur_info = {nome:'Bulbasaur',
                         tipo:'planta e veneno',
                         fraco:'fogo, pisifico, voador e gelo',
                         vida:100,
                         attack:64
}
//propriedades squirtle
const squirtle_info = {nome:'Squirtle',
                         tipo:'água',
                         fraco:'planta e eletrico',
                         vida:100,
                         attack:64
}

//paigna inicial

//Sobre(ids/classes adicionados no index)
const nomePoke = document.getElementById('nomePokemon')
const tipoPoke = document.getElementById('tipoPokemon')
const fracoPoke = document.getElementById('fracoPokemon')
const vidaPoke = document.getElementById('vidaPokemon')
const attackPoke = document.getElementById('attackPokemon')
const sobrePokemon = document.getElementsByClassName('sobrePokemon')
const divVisbSobrePokemon = document.getElementById('visibehidden')
const inicialBox = document.getElementById('inicialBox')
//Botões
const escolhaSharmander = document.getElementById('escolhaSharmander')
const escolhaBulbasaur = document.getElementById('escolhaBulbasaur')
const escolhaSquirtle = document.getElementById('escolhaSquirtle')
const btn_next = document.getElementById('btn_next')
escolhaSharmander.addEventListener('click',()=>{
    divVisbSobrePokemon.style.visibility = 'visible'
    nomePoke.innerText = `Sobre o pokemon ${sharmander_info.nome}`
    tipoPoke.innerText = `Tipo: ${sharmander_info.tipo}`
    fracoPoke.innerText = `Fraco: ${sharmander_info.fraco}`
    vidaPoke.innerText =  `Vida:  ${sharmander_info.vida}`
    attackPoke.innerText =  `Attack-max:  ${sharmander_info.attack}`
    btn_next.addEventListener('click', ()=>{
        
        window.open('/Luta-Shar-Rattata/','_self')
    })
} )
escolhaBulbasaur.addEventListener('click', ()=>{
    divVisbSobrePokemon.style.visibility = 'visible'
    nomePoke.innerText = `Sobre o pokemon ${bulbasaur_info.nome}`
    tipoPoke.innerText = `Tipo: ${bulbasaur_info.tipo}`
    fracoPoke.innerText = `Fraco: ${bulbasaur_info.fraco}`
    vidaPoke.innerText =  `Vida:  ${bulbasaur_info.vida}`
    attackPoke.innerText =  `Attack-max:  ${bulbasaur_info.attack}`
    btn_next.addEventListener('click', ()=>{
        window.open('/Luta-Bulb-Rattata/','_self')
        
    })
})
escolhaSquirtle.addEventListener('click',()=>{
    divVisbSobrePokemon.style.visibility = 'visible'
    nomePoke.innerText = `Sobre o pokemon ${squirtle_info.nome}`
    tipoPoke.innerText = `Tipo: ${squirtle_info.tipo}`
    fracoPoke.innerText = `Fraco: ${squirtle_info.fraco}`
    vidaPoke.innerText =  `Vida:  ${squirtle_info.vida}`
    attackPoke.innerText =  `Attack-max:  ${squirtle_info.attack}`
    btn_next.addEventListener('click', ()=>{
        window.open('/Luta-Squi-Rattata/')
        
    })
})
//fim da pagina inicial
