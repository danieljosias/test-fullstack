import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { toast } from 'react-toastify'

export default function Header() {
  const history = useHistory()

  const logout = () =>{
    localStorage.clear()
    history.push('/signin')
    toast.success('✔️ Deslogado com sucesso!')
  } 
  return (
    <Container>
        <header>
            <nav>
                <li><Link to="/client" className='link'>Cliente</Link></li>
                <li><Link to="/contact" className='link'>Contato</Link></li>
                <span><BiLogOut/><button className='link' onClick={() => logout()}>Sair</button></span> 
            </nav>
        </header>
    </Container>
  )
}
