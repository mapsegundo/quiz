/* eslint-disable @typescript-eslint/no-explicit-any */
export function embaralhar(array: any[]): any[] {
  return array
    .map((a) => ({ ordem: Math.random(), valor: a }))
    .sort((a, b) => a.ordem - b.ordem)
    .map((a) => a.valor);
}
