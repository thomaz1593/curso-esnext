// operador ... rest (juntar)/spread(espalhar)
// Usar rest com parâmetro de função

// Usar spread com objetos
const funcionario = {
    nome: 'Maria',
    salario: 1234.56
}
const clone = {
    ativo: true,
    ...funcionario
}
console.log(clone)

// Usar spread com arrays
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)