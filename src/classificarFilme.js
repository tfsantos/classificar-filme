export function classificarFilme(filmes) {
    return filmes.map(filme => {
        let somaNotas = 0
        let mediaFilme = 0
    
        filme.avaliacoes.forEach(nota => {
            somaNotas += nota
        })

        mediaFilme = somaNotas / filme.avaliacoes.length

        if (mediaFilme >= 4) 
            return "Filme recomendado"
        else if (mediaFilme >= 3 && mediaFilme < 4)
            return "Filme razoavel" 
        return "Filme ruim"
    })
}