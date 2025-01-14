import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(101, "Qual é o maior mamífero do mundo?", [
    RespostaModel.errada("Elefante Africano"),
    RespostaModel.errada("Orca"),
    RespostaModel.errada("Hipopótamo"),
    RespostaModel.certa("Baleia-Azul"),
  ]),
  new QuestaoModel(102, "Qual país é conhecido como a Terra do Sol Nascente?", [
    RespostaModel.errada("China"),
    RespostaModel.errada("Coreia do Sul"),
    RespostaModel.errada("Tailândia"),
    RespostaModel.certa("Japão"),
  ]),
  new QuestaoModel(103, "Qual é o menor país do mundo?", [
    RespostaModel.errada("Mônaco"),
    RespostaModel.errada("San Marino"),
    RespostaModel.errada("Malta"),
    RespostaModel.certa("Vaticano"),
  ]),
  new QuestaoModel(104, "Quantos ossos tem o corpo humano adulto?", [
    RespostaModel.errada("206"),
    RespostaModel.errada("208"),
    RespostaModel.errada("210"),
    RespostaModel.certa("206"),
  ]),
  new QuestaoModel(105, "Quem pintou a Mona Lisa?", [
    RespostaModel.errada("Vincent van Gogh"),
    RespostaModel.errada("Pablo Picasso"),
    RespostaModel.errada("Claude Monet"),
    RespostaModel.certa("Leonardo da Vinci"),
  ]),
  new QuestaoModel(106, "Qual planeta é conhecido como o Planeta Vermelho?", [
    RespostaModel.errada("Júpiter"),
    RespostaModel.errada("Saturno"),
    RespostaModel.errada("Vênus"),
    RespostaModel.certa("Marte"),
  ]),
  new QuestaoModel(107, "Qual é o rio mais longo do mundo?", [
    RespostaModel.errada("Rio Yangtzé"),
    RespostaModel.errada("Rio Mississippi"),
    RespostaModel.errada("Rio Amazonas"),
    RespostaModel.certa("Rio Nilo"),
  ]),
  new QuestaoModel(108, "Em que ano o homem pisou na Lua pela primeira vez?", [
    RespostaModel.errada("1967"),
    RespostaModel.errada("1969"),
    RespostaModel.errada("1971"),
    RespostaModel.certa("1969"),
  ]),
  new QuestaoModel(109, "Quantos lados tem um hexágono?", [
    RespostaModel.errada("4"),
    RespostaModel.errada("5"),
    RespostaModel.errada("7"),
    RespostaModel.certa("6"),
  ]),
  new QuestaoModel(110, "Qual é o maior oceano do planeta?", [
    RespostaModel.errada("Oceano Atlântico"),
    RespostaModel.errada("Oceano Índico"),
    RespostaModel.errada("Oceano Ártico"),
    RespostaModel.certa("Oceano Pacífico"),
  ]),
  new QuestaoModel(111, "Qual país tem o formato aproximado de uma bota?", [
    RespostaModel.errada("Espanha"),
    RespostaModel.errada("Grécia"),
    RespostaModel.errada("Portugal"),
    RespostaModel.certa("Itália"),
  ]),
  new QuestaoModel(112, "Qual é a capital do Canadá?", [
    RespostaModel.errada("Toronto"),
    RespostaModel.errada("Vancouver"),
    RespostaModel.errada("Montreal"),
    RespostaModel.certa("Ottawa"),
  ]),
  new QuestaoModel(
    113,
    "Quantos dentes possui um adulto com a dentição completa?",
    [
      RespostaModel.errada("30"),
      RespostaModel.errada("28"),
      RespostaModel.errada("34"),
      RespostaModel.certa("32"),
    ]
  ),
  new QuestaoModel(
    114,
    "Qual é o elemento químico representado pelo símbolo 'O'?",
    [
      RespostaModel.errada("Ouro"),
      RespostaModel.errada("Osmium"),
      RespostaModel.errada("Óxido"),
      RespostaModel.certa("Oxigênio"),
    ]
  ),
  new QuestaoModel(115, "Quem foi o primeiro presidente dos Estados Unidos?", [
    RespostaModel.errada("Abraham Lincoln"),
    RespostaModel.errada("Thomas Jefferson"),
    RespostaModel.errada("John Adams"),
    RespostaModel.certa("George Washington"),
  ]),
  new QuestaoModel(116, "Qual é o maior deserto do mundo?", [
    RespostaModel.errada("Deserto do Saara"),
    RespostaModel.errada("Deserto de Gobi"),
    RespostaModel.errada("Deserto de Kalahari"),
    RespostaModel.certa("Antártida"),
  ]),
  new QuestaoModel(117, "Em que continente está localizado o Egito?", [
    RespostaModel.errada("Ásia"),
    RespostaModel.errada("Europa"),
    RespostaModel.errada("América"),
    RespostaModel.certa("África"),
  ]),
  new QuestaoModel(118, "Qual é o nome da maior floresta tropical do mundo?", [
    RespostaModel.errada("Floresta do Congo"),
    RespostaModel.errada("Floresta da Amazônia"),
    RespostaModel.errada("Floresta da Indonésia"),
    RespostaModel.certa("Floresta Amazônica"),
  ]),
  new QuestaoModel(119, "Quantos segundos tem uma hora?", [
    RespostaModel.errada("3.600"),
    RespostaModel.errada("60.000"),
    RespostaModel.errada("600"),
    RespostaModel.certa("3.600"),
  ]),
  new QuestaoModel(120, "Qual é a moeda oficial do Japão?", [
    RespostaModel.errada("Won"),
    RespostaModel.errada("Yuan"),
    RespostaModel.errada("Baht"),
    RespostaModel.certa("Iene"),
  ]),
  new QuestaoModel(121, "Qual é o país mais populoso do mundo?", [
    RespostaModel.errada("Índia"),
    RespostaModel.errada("Estados Unidos"),
    RespostaModel.errada("Indonésia"),
    RespostaModel.certa("China"),
  ]),
  new QuestaoModel(122, "Quantos anéis há na bandeira olímpica?", [
    RespostaModel.errada("4"),
    RespostaModel.errada("7"),
    RespostaModel.errada("6"),
    RespostaModel.certa("5"),
  ]),
  new QuestaoModel(123, "Qual é o nome do maior vulcão ativo do mundo?", [
    RespostaModel.errada("Monte Fuji"),
    RespostaModel.errada("Etna"),
    RespostaModel.errada("Krakatoa"),
    RespostaModel.certa("Mauna Loa"),
  ]),
  new QuestaoModel(124, "Quem escreveu 'Dom Quixote'?", [
    RespostaModel.errada("Gabriel García Márquez"),
    RespostaModel.errada("Fernando Pessoa"),
    RespostaModel.errada("Jorge Luis Borges"),
    RespostaModel.certa("Miguel de Cervantes"),
  ]),
  new QuestaoModel(125, "Qual gás é essencial para a respiração?", [
    RespostaModel.errada("Hidrogênio"),
    RespostaModel.errada("Dióxido de Carbono"),
    RespostaModel.errada("Hélio"),
    RespostaModel.certa("Oxigênio"),
  ]),
  new QuestaoModel(126, "Qual é o esporte mais popular do mundo?", [
    RespostaModel.errada("Basquete"),
    RespostaModel.errada("Tênis"),
    RespostaModel.errada("Críquete"),
    RespostaModel.certa("Futebol"),
  ]),
  new QuestaoModel(127, "Qual é o maior estado do Brasil em território?", [
    RespostaModel.errada("Mato Grosso"),
    RespostaModel.errada("Pará"),
    RespostaModel.errada("Minas Gerais"),
    RespostaModel.certa("Amazonas"),
  ]),
  new QuestaoModel(128, "Quem desenvolveu a teoria da relatividade?", [
    RespostaModel.errada("Isaac Newton"),
    RespostaModel.errada("Galileu Galilei"),
    RespostaModel.errada("Nikola Tesla"),
    RespostaModel.certa("Albert Einstein"),
  ]),
  new QuestaoModel(129, "Qual é o maior animal terrestre?", [
    RespostaModel.errada("Rinoceronte Branco"),
    RespostaModel.errada("Hipopótamo"),
    RespostaModel.errada("Girafa"),
    RespostaModel.certa("Elefante Africano"),
  ]),
  new QuestaoModel(130, "Qual é o idioma oficial do Brasil?", [
    RespostaModel.errada("Espanhol"),
    RespostaModel.errada("Inglês"),
    RespostaModel.errada("Francês"),
    RespostaModel.certa("Português"),
  ]),
];

export default questoes;
