export const useCalculateMedia = (key:string, indicador: Array<number>) => {
  const sumaTotal = indicador.reduce((acc:any, num:any) => acc + num, 0);
  const cantidadElementos = indicador.length;

  const valorMedio = sumaTotal / cantidadElementos;
  const finalResult = parseFloat(valorMedio.toFixed(2));

  return { [key]: finalResult };
}