import React,{useState, useEffect, useContext} from 'react'
import { ApiContext } from '../../providers/api';
import { Container } from './styles'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Contact from '../Contact';
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

export default function FormContact() {
  const [contacts, setContacts] = useState()
  const { createContact, listContact } = useContext(ApiContext)
  const history = useHistory()

  const formSchema = yup.object().shape({
      fullname: yup.string().required("Nome completo obrigatório"),
      email: yup.string().required("Email obrigatório").email("E-mail inválido"),
      telephone: yup.string(),
      cellphone: yup.string().required("Telefone obrigatório"),       
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(formSchema)
    });
  
    const onSubmitFunction = async (data) => {
      const token = localStorage.getItem('token')
      if(!token){
        toast.error('❌ Não autorizado, faça login!')
        history.push('/signin')
      }

      const res = await createContact(token,data)
      if(res.name !== 'AxiosError'){
        toast.success('✔️ Contato cadastrado com sucesso!')
      }
    }

    useEffect(()=>{
      listContacts()
    },[])
  
      async function listContacts(){
        const result = await listContact()
  
        if(result.name !== 'AxiosError'){
          setContacts(result.data)
        }
      }
    
  return (
    <Container>
       <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Cadastro do contato</h3>
         <input placeholder="Nome completo" type="text" {...register("fullname")} />
         {errors.fullname?.message}

         <input placeholder="Email" type="text" {...register("email")} />
         {errors.email?.message}

         <input placeholder="Telefone" type="text" {...register("telephone")} />
         {errors.telephone?.message}

         <input placeholder="Celular" type="text" {...register("cellphone")} />
         {errors.cellphone?.message}

         <button type="submit">Enviar!</button>
       </form>
       <div className='contact'>
        {contacts?.map(contact => {
          return <Contact key={contact.id} contact={contact}/>
        })}
       </div>
    </Container>
  )
}
