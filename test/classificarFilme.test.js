import assert from 'node:assert'
import {classificarFilme} from '../src/classificarFilme.js'

describe('Classificação de filmes com base nas notas recebidas', function (){
    it('CT01: Verificar a classificação: Minha mãe é uma peça - Filme recomendado', function(){
        const resultadoEsperado = 'Filme recomendado'
        const classificacoes = [
            {nome: "Minha mãe é uma peça", avaliacoes: [5,4,4,4,5]}
        ]

        let resultadoEncontrado = classificarFilme(classificacoes)

        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT02: Verificar a classificação: Saneamento básico - Filme razoável', function(){
        const resultadoEsperado = 'Filme razoavel'
        const classificacoes = [
            {nome: "Saneamento Básico", avaliacoes: [3,4,2,3,4]}
        ]

        let resultadoEncontrado = classificarFilme(classificacoes)

        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT03: Verificar a classificação: Se eu fosse você - Filme ruim', function(){
        const resultadoEsperado = 'Filme ruim'
        const classificacoes = [
            {nome: "Se eu fosse você", avaliacoes: [1,2,3]} 
        ]

        let resultadoEncontrado = classificarFilme(classificacoes)

        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT04: Verificar a classificação de todos os filmes', function(){
        const resultadoEsperado = ['Filme recomendado', 'Filme razoavel', 'Filme ruim']
        const classificacoes = [
            {nome: "Minha mãe é uma peça", avaliacoes: [5,4,4,4,5]}, 
            {nome: "Saneamento Básico", avaliacoes: [3,4,2,3,4]}, 
            {nome: "Se eu fosse você", avaliacoes: [1,2,3]} 
        ]

        let resultadoEncontrado = classificarFilme(classificacoes)

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })
})