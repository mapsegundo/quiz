import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [idsQuestao, setIdsQuestao] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function carregarIdsQuestao() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const ids = await resp.json();
    console.log(ids);
    setIdsQuestao(ids);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarIdsQuestao();
  }, []);

  useEffect(() => {
    if (idsQuestao.length > 0) {
      carregarQuestao(idsQuestao[0]);
    }
  }, [idsQuestao]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaPergunta() {
    if (questao === undefined) {
      return undefined;
    }
    const proximoIndice = idsQuestao.indexOf(questao.id) + 1;
    return idsQuestao[proximoIndice];
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsQuestao.length,
        certas: respostasCertas,
      },
    });
  }

  function irPraProximoPasso() {
    const proximoId = idProximaPergunta();
    if (proximoId) {
      irPraProximaQuestao(proximoId);
    } else {
      finalizar();
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questionario
        questao={questao!}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </div>
  );
}
