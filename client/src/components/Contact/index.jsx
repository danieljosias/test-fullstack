import React,{ useState } from 'react'
import { useContext } from 'react'
import { ApiContext} from '../../providers/api'
import { Container } from './styles'
import { toast } from 'react-toastify'
import ModalUpdateContact from '../ModalUpdateContact'

export default function Contact({contact}) {
  const { deleteContact } = useContext(ApiContext)
  const [modalUpdateContact, setModalUpdateContact] = useState()

  async function handleDeleteContact () {
    const id = contact.id
    const res = await deleteContact(id)

    if(res.name !== 'AxiosError'){
      toast.success('✔️ Contato deletado com sucesso!')
    }else{
      toast.error('❌ Contato não foi encontrado!')
    }
  }

  const handleOpenModal = () => {
    setModalUpdateContact(true)
  }

  const handleCloseModal = () => {
    setModalUpdateContact(false)
  }

  return (
    <Container>
      <ModalUpdateContact modalUpdateContact={modalUpdateContact} handleCloseModal={handleCloseModal} contact={contact}/>
        <h3>Contato do cliente</h3>
        <div className='wrapper'>
          <p>Nome: {contact.fullname}</p>
          <p>Email: {contact.email}</p>
          <p>Telefone: {contact.telephone}</p>
          <p>Celular: {contact.cellphone}</p>

          <div>
            <button onClick={() => handleDeleteContact()}>Excluir</button>
            <button onClick={() => handleOpenModal()}>Editar</button>
          </div>
        </div>
    </Container>
  )
}
