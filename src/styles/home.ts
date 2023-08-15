import { styled } from 'styled-components'

export const DefaultTheme = {
  white: '#FFFFFF',
  blue: '#0000ff',
  gray: '#808080',
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
`
export const ContainerHeader = styled.header`
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 15px;
    margin-top: 10px;
  }
  div {
    display: flex;
    gap: 10px;
    input[type='number'] {
      border: 1px solid white;
      padding: 10px;
      border-radius: 8px;
      background: transparent;
      color: ${(props) => props.theme.white};
      width: 100%;
      height: 50px;
      margin-top: 20px;
      cursor: pointer;
    }
    input[type='number']::placeholder {
      color: ${(props) => props.theme.white};
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none; /* Remove as setas no Chrome, Safari e Edge */
      appearance: none;
      margin: 0;
    }
    button {
      border: 1px solid white;
      padding: 10px;
      border-radius: 8px;
      background: transparent;
      color: ${(props) => props.theme.white};
      height: 50px;
      margin-top: 20px;
      cursor: pointer;
    }
    button:hover {
      background: black;
    }
  }
`
export const ContainerSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  grid-gap: 10px;

  input {
    border: 1px solid white;
    padding: 10px;
    border-radius: 8px;
    background: transparent;
    color: ${(props) => props.theme.white};
    width: 400px;
    height: 40px;
    margin-top: 20px;
  }
  input::placeholder {
    color: ${(props) => props.theme.white};
  }

  input:disabled {
    background: ${(props) => props.theme.gray};
  }
`
