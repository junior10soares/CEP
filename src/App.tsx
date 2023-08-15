import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import {
  ContainerHeader,
  Container,
  DefaultTheme,
  ContainerSection,
} from './styles/home'
import { useState } from 'react'
import axios from 'axios'

interface cepProps {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export function App() {
  const [cepAll, setCepAll] = useState<cepProps>({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
  })
  const [cepNumber, setCepNumber] = useState('')

  const fetchCepData = async () => {
    try {
      const response = await axios.get<cepProps>(
        `https://viacep.com.br/ws/${cepNumber}/json/`,
      )
      const data = response.data
      setCepAll(data)
    } catch (error) {
      console.log(error)
      alert('Digite um CEP válido')
      setCepNumber('')
    }
  }

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value
    setCepNumber(newCep)
  }

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Container>
        <ContainerHeader>
          <h1>Cadastre seu endereço</h1>
          <h2>Preencha os campos para podermos enviar seus produtos</h2>
          <div>
            <input
              type="number"
              placeholder="Digite o seu CEP"
              value={cepNumber}
              onChange={handleCepChange}
            />
            <button onClick={fetchCepData}>Buscar</button>
          </div>
        </ContainerHeader>
        <ContainerSection>
          <input
            type="text"
            placeholder="Rua"
            value={cepAll.logradouro}
            disabled
          />
          <input
            type="text"
            placeholder="Bairro"
            value={cepAll.bairro}
            disabled
          />
          <input
            type="text"
            placeholder="Cidade"
            value={cepAll.localidade}
            disabled
          />
          <input type="text" placeholder="Estado" value={cepAll.uf} disabled />
        </ContainerSection>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}
