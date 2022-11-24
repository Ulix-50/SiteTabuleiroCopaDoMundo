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
        init: Init,
        preload: Preload,
        create: Create,
        update: Update
    }
};

const game = new Phaser.Game(config);

var valor = 1;
var ImagemDado;

function Init() {
}

function Preload() {
    this.load.image('Dado_Lado1', 'ASSETS/DadoLado1.png');
    this.load.image('Dado_Lado2', 'ASSETS/DadoLado2.png');
    this.load.image('Dado_Lado3', 'ASSETS/DadoLado3.png');
    this.load.image('Dado_Lado4', 'ASSETS/DadoLado4.png');
    this.load.image('Dado_Lado5', 'ASSETS/DadoLado5.png');
    this.load.image('Dado_Lado6', 'ASSETS/DadoLado6.png');
}

function Create() {

    DadoLado1 = this.add.image(150, 150,'Dado_Lado1').setInteractive();
    DadoLado2 = this.add.image(150, 150,'Dado_Lado2').setInteractive();
    DadoLado3 = this.add.image(150, 150,'Dado_Lado3').setInteractive();
    DadoLado4 = this.add.image(150, 150,'Dado_Lado4').setInteractive();
    DadoLado5 = this.add.image(150, 150,'Dado_Lado5').setInteractive();
    DadoLado6 = this.add.image(150, 150,'Dado_Lado6').setInteractive();

    this.input.on('pointerdown', AdicionarValor);
    
    
}

function Update() {

}

function AdicionarValor() {
    valor = Math.floor(Math.random() * 7);
    if (valor == 0) {
        valor = 1;
    }
    DefinirLadoDoDado(valor)
}

function DefinirLadoDoDado(Valor) {
    switch (Valor) {
        case 1:
            CarregarImagem_Dado(DadoLado1);
            ApagarImagem_Dado(DadoLado2);
            ApagarImagem_Dado(DadoLado3);
            ApagarImagem_Dado(DadoLado4);
            ApagarImagem_Dado(DadoLado5);
            ApagarImagem_Dado(DadoLado6);
            break;
        case 2:
            ApagarImagem_Dado(DadoLado1);
            CarregarImagem_Dado(DadoLado2);
            ApagarImagem_Dado(DadoLado3);
            ApagarImagem_Dado(DadoLado4);
            ApagarImagem_Dado(DadoLado5);
            ApagarImagem_Dado(DadoLado6);
            break;
        case 3:
            ApagarImagem_Dado(DadoLado1);
            ApagarImagem_Dado(DadoLado2);
            CarregarImagem_Dado(DadoLado3);
            ApagarImagem_Dado(DadoLado4);
            ApagarImagem_Dado(DadoLado5);
            ApagarImagem_Dado(DadoLado6);
            break;
        case 4:
            ApagarImagem_Dado(DadoLado1);
            ApagarImagem_Dado(DadoLado2);
            ApagarImagem_Dado(DadoLado3);
            CarregarImagem_Dado(DadoLado4);
            ApagarImagem_Dado(DadoLado5);
            ApagarImagem_Dado(DadoLado6);
            break;
        case 5:
            ApagarImagem_Dado(DadoLado1);
            ApagarImagem_Dado(DadoLado2);
            ApagarImagem_Dado(DadoLado3);
            ApagarImagem_Dado(DadoLado4);
            CarregarImagem_Dado(DadoLado5);
            ApagarImagem_Dado(DadoLado6);
            break;
        case 6:
            ApagarImagem_Dado(DadoLado1);
            ApagarImagem_Dado(DadoLado2);
            ApagarImagem_Dado(DadoLado3);
            ApagarImagem_Dado(DadoLado4);
            ApagarImagem_Dado(DadoLado5);
            CarregarImagem_Dado(DadoLado6);
            break;
        default:
            CarregarImagem_Dado(DadoLado1);
            ApagarImagem_Dado(DadoLado2);
            ApagarImagem_Dado(DadoLado3);
            ApagarImagem_Dado(DadoLado4);
            ApagarImagem_Dado(DadoLado5);
            ApagarImagem_Dado(DadoLado6);
            break;
    }
}

function CarregarImagem_Dado(LadoDado) {
    LadoDado.visible = true;
    console.log(valor + " foi selecionado");
    
}

function ApagarImagem_Dado(LadoDado) {
    LadoDado.visible = false;
    
}
