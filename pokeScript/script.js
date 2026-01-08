class Pokemon {
    constructor(id, name, type, moves, hp, weak, strong, img) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.moves = moves;
        this.hp = hp;
        this.weak = weak;
        this.strong = strong;
        this.img = img;
    }

    attack(move, target) {
        console.log(`${this.name} has attacked ${target.name}`)
        let dmg = move.dmg

        if (target.weak.includes(move.type)) {
            console.log(`Weak to ${move.type}`)
            dmg *= 1.8
        } else if (target.strong.includes(move.type)) {
            console.log(`Strong to ${move.type}`)
            dmg *= 0.7
        }
        target.receive_dmg(dmg)
    }


    receive_dmg(dmg) {
        console.log(`${this.name} receieved ${dmg}`)
        if (dmg >= this.hp) {
            this.hp = 0
            console.log("Target has fainted")
        } else {
            this.hp -= dmg
        }


    }
    render_pkmn() {
        console.log('rendering pokemon')
        this.element = document.createElement('div')
        this.element.className = 'pk-card'

        this.title = document.createElement('h4')
        this.title.id = 'pk-title'
        this.title.textContent = this.name

        this.picture = document.createElement('img')
        this.picture.id = 'pic'
        this.picture.src = this.img


        // Moves grid
        this.move_grid = document.createElement('div')
        this.move_grid.id = 'move_grid'

        // Iterating through move list

        for (let i = 0; i < this.moves.length; i++) {
            let x = document.createElement('div')
            x.id = 'move'
            x.textContent = `${this.moves[i].name}`
            this.move_grid.appendChild(x)
        }


        // Appending components to card
        this.element.appendChild(this.title)
        this.element.appendChild(this.picture)
        this.element.appendChild(this.move_grid)
        document.getElementById('pk-holder').appendChild(this.element)
    }
}

class Move {
    constructor(name, dmg, type, pp) {
        this.name = name;
        this.dmg = dmg;
        this.type = type;
        this.pp = pp;
    }
    use() {
        this.pp -= 3;
        return this.damage
    }
}



tndr_shck = new Move("Thunder Shock", 30, "Electric", 10)
tack = new Move("Tackle", 10, "Normal", 20)
wtr_gn = new Move("Water Gun", 25, "Water", 15)
pikachu = new Pokemon(1, "Pikachu", "Electric", [tack, tndr_shck], 23, ["Ground", "Rock"], ["Water", "Grass", "Fly"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFr3c_5p1e8bI7Dnz6ZOb9Truvvz24th06MAn2V_-ZZgubXE:www.yourdecoration.com/cdn/shop/files/gbeye-fp4716-pokemon-pikachu-neon-poster-61x91-5cm_0f5303a2-3438-4132-ad41-955881014641.jpg%3Fv%3D1760462481&s://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEz9yXYSr70lo55gXGv7imog8cKD3Fdf21oP0jJkW1VGLYA8:https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%25C3%25A9mon_Pikachu_art.png&s")
squirtle = new Pokemon(2, "Squirtle", "Water", [tack, wtr_gn], 30, ["Electric", "Grass"], ["Fire", "Rock", "Ground", "Ice"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFk_lAm_ecd8MnQl2ozjoYqJ5ze2v2XGl0Wc5BnADL7Dkh7tOT:https://pokemonrevolution.net/forum/uploads/monthly_2020_06/squirtle.jpg.48410274429bc0b5b95ad5741650692c.jpg&s")


console.log(pikachu.hp)
pikachu.render_pkmn()
squirtle.attack(squirtle.moves[1], pikachu)
pikachu.attack(pikachu.moves[1], squirtle)
console.log(pikachu.hp)