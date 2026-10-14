import assert from 'node:assert'
import {classificarFilme} from '../src/classificarFilme.js'
import filmes from '../fixtures/filmes.json' with {type: 'json'}
import resultadosEsperados from '../fixtures/resultados.json' with {type: 'json'}

describe('Classificação de filmes com base nas notas recebidas', function (){
    it('CT01: Verificar a classificação: Minha mãe é uma peça - Filme recomendado', function(){
        const resultadoEsperado = [resultadosEsperados[0]]

        let resultadoEncontrado = classificarFilme([filmes[0]])

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })
    it('CT02: Verificar a classificação: Saneamento Básico - Filme razoável', function(){
        const resultadoEsperado = [resultadosEsperados[1]]

        let resultadoEncontrado = classificarFilme([filmes[1]])

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })
    it('CT03: Verificar a classificação: Se eu fosse você - Filme ruim', function(){
        const resultadoEsperado = [resultadosEsperados[2]]

        let resultadoEncontrado = classificarFilme([filmes[2]])

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })
    it('CT04: Verificar a classificação de todos os filmes', function(){
        const resultadoEsperado = resultadosEsperados

        let resultadoEncontrado = classificarFilme(filmes)

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })
})