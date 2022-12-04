import React,{useContext, useState} from 'react'
import { ApiContext } from '../../providers/api'
import { Container } from './styles'
import { toast } from 'react-toastify'
import ModalUpdateClient from '../ModalUpdateClient'

export default function Client({client}) {
  const { deleteClient } = useContext(ApiContext)
  const [modalUpdateCliente, setModalUpdateCliente] = useState()

  async function handleDeleteClient () {
    const id = client.id
    const res = await deleteClient(id)

    if(res.name !== 'AxiosError'){
      toast.success('✔️ Cliente deletado com sucesso!')
    }else{
      toast.error('❌ Cliente não foi encontrado!')
    }
  }

  const handleOpenUpdateModal = () => {
    setModalUpdateCliente(true)
  }

  const handleCloseUpdateModal = () => {
    setModalUpdateCliente(false)
  }


  return (
    <Container>
      <ModalUpdateClient handleCloseUpdateModal={handleCloseUpdateModal} modalUpdateCliente={modalUpdateCliente} client={client}/>
      
      <h3>Dados do cliente</h3>
      <div className='wrapper'>
        <p>Nome: {client.fullname}</p>
        <p>Email: {client.email}</p>
        <p>Telefone: {client.telephone}</p>
        <p>Celular: {client.cellphone}</p>
        <p>Data de cadastro: {client.createdAt}</p>

        <div>
          <button onClick={() => handleDeleteClient()}>Excluir</button>
          <button onClick={() => handleOpenUpdateModal()}>Editar</button>
        </div>
      </div>
    </Container>
  )
}
