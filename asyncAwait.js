const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obteralunos = async () => {
    const turA = await getTurma('A')
    const turB = await getTurma('B')
    const turC = await getTurma('C')
    return [].concat(turA, turB, turC)
} // retorna um objeto AsyncFunction

obteralunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))