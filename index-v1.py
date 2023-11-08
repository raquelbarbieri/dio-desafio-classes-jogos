nome = input("Digite o seu nome para começar a aventura do herói: ")

print("Olá, " + nome + ". Seja bem-vindo!")

idade = input("Digite a sua idade: ")

tipo = input("Agora, escolha o seu tipo de herói [guerreiro, mago, monge, ninja]: ").upper()

ataque = ""

if tipo == "GUERREIRO":
  ataque = "espada"
elif "MAGO":
  ataque = "magia"
elif "MONGE":
  ataque = "artes marciais"
elif "NINJA":
  ataque = "shuriken"

class TipoGuerreiro:
    def __init__(self, nome, idade, tipo, ataque):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo
        self.ataque = ataque

    def escrever(self):
        print(f"O herói {self.nome} tem {self.idade} anos e está na classe {self.tipo}.")
        print(f"O {self.tipo} atacou usando {self.ataque}.")

heroi = TipoGuerreiro(nome, idade, tipo, ataque)
heroi.escrever()

xp = ""

while True:
    try:
        xp = int(input("Digite o seu xp para descobrir a força do seu ataque: [Digite um número entre 1 e 10]: "))
        if 1 <= xp <= 10:
            break
        else:
            print("Número fora do intervalo permitido (1 a 10). Tente novamente.")
    except ValueError:
        print("Entrada inválida. Por favor, digite um número válido.")

print(f"Força igual a {xp * 10}.")
