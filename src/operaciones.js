export const operaciones = (parametros) => {
	const primerNumero = parametros.primerNumero;
	const segundoNumero = parametros.segundoNumero;
	const tercerNumero = parametros.multiplicador;
	const cuartoNumero = parametros.divisor;

	const suma = primerNumer + segundoNumero;
	const multiplicacion = tercerNumero ? suma * tercerNumero : suma;
	const division = cuartoNumero
		? multiplicacion / cuartoNumero
		: multiplicacion;

	return division;
};
