from flask import Flask, render_template, redirect
app = Flask(__name__,template_folder='templates')
class pokemons:
    def sharmander(self):
        self.nome = 'Sharmander'
        self.tipo = 'fogo'
        self.fraco = 'água, chão e pedra'
        self.vida = 100
        self.attack = 25
    def bulbasaur(self):
        self.nome = 'Bulbasaur'
        self.tipo = 'planta e veneno'
        self.fraco = 'fogo, pisifico, voador e gelo'
        self.vida = 100
        self.attack = 16
    def Squirtle(self):
        self.nome = 'Squirtle'
        self.tipo = 'água'
        self.fraco = 'planta e eletrico'
        self.vida = 100
        self.attack = 16
    def rattata(self):
        self.nome = 'Rattata'
        self.tipo = 'normal'
        self.fraco = 'voador'
        self.vida = 65
        self.attack = 25

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/what_your_pokemon/Sharmander')
def what_your_pokemon_sharmander():
    return render_template('Batalha.html')

if '__main__' == __name__:
    app.run(debug=True)