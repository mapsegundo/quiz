export default class RespostaModel {
  #valor: string;
  #certa: boolean;
  #revelada: boolean;

  constructor(valor: string, certa: boolean, revelada = false) {
    this.#valor = valor;
    this.#certa = certa;
    this.#revelada = revelada;
  }

  get valor() {
    return this.#valor;
  }

  get certa() {
    return this.#certa;
  }

  get revelada() {
    return this.#revelada;
  }

  paraObjeto() {
    return {
      valor: this.#valor,
      certa: this.#certa,
      revelada: this.#revelada,
    };
  }

  revelar() {
    return new RespostaModel(this.#valor, this.#certa, true);
  }

  static criarUsandoObjeto(modelo: RespostaModel): RespostaModel {
    return new RespostaModel(modelo.valor, modelo.certa, modelo.revelada);
  }

  static certa(valor: string) {
    return new RespostaModel(valor, true);
  }

  static errada(valor: string) {
    return new RespostaModel(valor, false);
  }
}
