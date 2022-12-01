import React from 'react'
import { Container } from './styles'

export default function Client() {
  return (
    <Container>
      <h3>Dados do cliente</h3>
      <div className='wrapper'>
        <p>Nome:</p>
        <p>Email:</p>
        <p>Telefone:</p>
        <p>Celular:</p>
        <p>Data de cadastro:</p>

        <div>
          <button>Excluir</button>
          <button>Editar</button>
        </div>
      </div>
    </Container>
  )
}
