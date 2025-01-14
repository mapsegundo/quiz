import { NextApiRequest, NextApiResponse } from "next";
import { embaralhar } from "../../../functions/arrays";
import questoes from "../bancoQuestoes";

export default function questionario(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(embaralhar(ids));
}
