import QuestaoModel from "@/model/questao";
import styles from "@/styles/Questao.module.css";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
  { valor: "A", corFundo: "#F2C866" },
  { valor: "B", corFundo: "#F266BA" },
  { valor: "C", corFundo: "#85D4F2" },
  { valor: "D", corFundo: "#BCE596" },
];

interface QuestaoProps {
  valor: QuestaoModel;
  tempoParaResposta?: number;
  respostaFornecida: (indice: number) => void;
  tempoEsgotado: () => void;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;
  const id = `questao-${questao.id}`;

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={`${questao.id}-${i}`}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].corFundo}
          respostaFornecida={props.respostaFornecida}
        />
      );
    });
  }

  return (
    <div>
      <div id={id} className={styles.questao}>
        <Enunciado texto={questao.enunciado} />
        <Temporizador
          key={questao.id}
          duracao={props.tempoParaResposta ?? 10}
          tempoEsgotado={props.tempoEsgotado}
        />
        {renderizarRespostas()}
      </div>
    </div>
  );
}
