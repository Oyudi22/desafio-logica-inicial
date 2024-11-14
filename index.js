/*  Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
    depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

    Se Xp for menor do que 1.000 = Ferro
    Se Xp for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 5.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = Radiante
*/

/*let nome = "Felipe o espadachin";
let xp = 6.876; // Mudar level
let nomeLevel;*/

let heroi = ["Felipe o espadachin", 7.998, "nomeLevel"];

switch (true){
    case (heroi[1] <= 1.000):
        heroi[2] = "Ferro";
        break;
    case (heroi[1] > 1.001 && heroi[1] <= 2.000):
        heroi[2] = "Bronze";
        break;
    case (heroi[1] > 2.001 && heroi[1] <= 5.000):
        heroi[2] = "Prata";
        break;
    case (heroi[1] > 5.001 && heroi[1] <= 7.000):
        heroi[2] = "Ouro";
        break;
    case (heroi[1] > 7.001 && heroi[1] <= 8.000):
        heroi[2] = "Platina";
        break;
    case (heroi[1] > 8.001 && heroi[1] <= 9.000):
        heroi[2] = "Ascendente";
        break;
    case (heroi[1] > 9.001 && heroi[1] <= 10.000):
        heroi[2] = "Imortal";
        break;
    case (heroi[1] >= 10.001):
        heroi[2] = "Radiante";
        break;
}

console.log(`O herói ${heroi[0]} está nível de ${heroi[2]}`);