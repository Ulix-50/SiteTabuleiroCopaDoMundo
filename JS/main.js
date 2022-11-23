
var texto;
var valor= 1;

function Preload() {
    this.load.image('Dado_Lado1', 'ASSETS/DadoLado1.jpg');
    this.load.image('Dado_Lado2', 'ASSETS/DadoLado2.jpg');
    this.load.image('Dado_Lado3', 'ASSETS/DadoLado3.jpg');
    this.load.image('Dado_Lado4', 'ASSETS/DadoLado4.jpg');
    this.load.image('Dado_Lado5', 'ASSETS/DadoLado5.jpg');
    this.load.image('Dado_Lado6', 'ASSETS/DadoLado6.jpg');
}

function Create() {
    texto = this.add.text(150, 150, "1", { fontStyle: 'bold', fontSize: "32px" });
    this.add.image(150,150,'Dado_Lado1');
    this.add.image(150,150,'Dado_Lado2');
    this.add.image(150,150,'Dado_Lado3');
    this.add.image(150,150,'Dado_Lado4');
    this.add.image(150,150,'Dado_Lado5');
    
    this.input.on('pointerdown', AdicionarValor);
    this.input.on('pointerup', DefinirValor);
}

function Update() {

}

function AdicionarValor() {
    valor = Math.floor(Math.random() * 7);
    if (valor == 0) {
        valor = 1;
    }
    texto.setText(valor);
}

function DefinirValor() {
    valor = valor;
}

function DefinirLadoDoDado(Valor) {
    switch (Valor) {
        case 1:
            
            break;
    
        default:
            break;
    }
}

const config = {

    type: Phaser.AUTO,

    width: 300,
    height: 300,
    physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 }
      }
    },
    scene: {
        preload: Preload,
        create: Create,
        update: Update,
    }
};

const game = new Phaser.Game(config);