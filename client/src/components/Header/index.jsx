import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Container>
        <header>
            <nav>
                <li><Link to="/client" className='link'>Cliente</Link></li>
                <li><Link to="/contact" className='link'>Contato</Link></li>
            </nav>
        </header>
    </Container>
  )
}
