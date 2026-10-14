export function classificarFilme(filmes) {
    return filmes.map(filme => {
        let somaNotas = 0
        let mediaFilme = 0
    
        filme.avaliacoes.forEach(nota => {
            somaNotas += nota
        })

        mediaFilme = somaNotas / filme.avaliacoes.length

        let avaliacao = "Filme ruim"

        if (mediaFilme >= 4) 
            avaliacao = "Filme recomendado"
        else if (mediaFilme >= 3 && mediaFilme < 4)
            avaliacao = "Filme razoavel" 

        return {
            nome: filme.nome,
            votos: filme.avaliacoes.length,
            media: mediaFilme,
            avaliacao: avaliacao
        }
    })
}