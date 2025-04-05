import { useEffect, useState } from "react"
import Input from "../Input"

import styled from 'styled-components'

import Livro from "../Livro/livro"
import { getLivros } from "../../servicos/livros"

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: auto;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa() {
 
    const [livrosPesquisados, setLivrosPesquisados] = useState([])  
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }
 
    const pesquisaLivro = ( evento ) => {
        const textoDigitado = evento.target.value
        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
        if (textoDigitado != null || textoDigitado !== "") {
            setLivrosPesquisados(resultadoPesquisa)
        }
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={pesquisaLivro}
            />
            <Livro resultados = {livrosPesquisados || []}/>
        </PesquisaContainer>
    )
}

export default Pesquisa