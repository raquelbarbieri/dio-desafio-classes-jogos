const nome = prompt("Digite o seu nome para começar a aventura do herói: ");

alert("Olá, " + nome + ". Seja bem-vindo!");

const idade = prompt("Digite a sua idade: ");

let tipo = prompt("Agora, escolha o seu tipo de herói [guerreiro, mago, monge, ninja]: ").toUpperCase();

let ataque = "";

if (tipo === "GUERREIRO") {
  ataque = "espada";
} else if (tipo === "MAGO") {
  ataque = "magia";
} else if (tipo === "MONGE") {
  ataque = "artes marciais";
} else {
  ataque = "shuriken";
}

class TipoGuerreiro {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  escrever() {
    console.log(`O herói ${this.nome} tem ${this.idade} anos e está na classe ${this.tipo}.`);
    console.log(`O ${this.tipo} atacou usando ${this.ataque}.`);
  }
}

const heroi = new TipoGuerreiro(nome, idade, tipo, ataque);
heroi.escrever();

let xp = 0;

while (true) {
  try {
    xp = parseInt(prompt("Digite o seu xp para descobrir a força do seu ataque: [Digite um número entre 1 e 10]: "));
    if (xp >= 1 && xp <= 10) {
      break;
    } else {
      alert("Número fora do intervalo permitido (1 a 10). Tente novamente.");
    }
  } catch (error) {
    alert("Entrada inválida. Por favor, digite um número válido.");
  }
}

console.log(`Força igual a ${xp * 100}.`);
