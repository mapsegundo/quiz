import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoQuestoes";

export default function questoesPorId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const idSelecionado = +(req.query.id || 0);

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questoesSelecionadas = unicaQuestaoOuNada[0].embaralharRespostas();
    res.status(200).json(questoesSelecionadas.paraObjeto());
  } else {
    res.status(204).send(null);
  }
}
