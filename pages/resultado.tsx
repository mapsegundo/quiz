import Estatistica from "@/components/Estatistica";
import styles from "../styles/Resultado.module.css";
import { useRouter } from "next/router";
import Botao from "@/components/Botao";

export default function Resultado() {
  const router = useRouter();
  const total = +(router.query.total || 0);
  const certas = +(router.query.certas || 0);
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatistica valor={total} texto="Perguntas" />
        <Estatistica valor={certas} texto="Certas" corFundo="#9CD2A4" />
        <Estatistica
          valor={`${percentual}%`}
          texto="Percentual"
          corFundo="#DE6A33"
        />
      </div>
      <Botao href="/" texto="Tentar Novamente" />
    </div>
  );
}
