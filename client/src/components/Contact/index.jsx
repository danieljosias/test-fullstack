import React from 'react'
import { Container } from './styles'

export default function Contact() {
  return (
    <Container>
        <h3>Contato do cliente</h3>
        <div className='wrapper'>
          <p>Nome:</p>
          <p>Email:</p>
          <p>Telefone:</p>
          <p>Celular:</p>

          <div>
              <button>Excluir</button>
              <button>Editar</button>
          </div>
        </div>
    </Container>
  )
}
