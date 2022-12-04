import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../providers/api'
import { Container } from './styles'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Client from '../Client';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function FormClient() {
    const { createClient, listClient} = useContext(ApiContext)
    const history = useHistory()
    const [clients, setClients] = useState()

    const formSchema = yup.object().shape({
        fullname: yup.string().required("Nome completo obrigatório"),
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        telephone: yup.string(),
        cellphone: yup.string().required("Telefone obrigatório"),
        createdAt: yup.date().required("Date obrigatória")
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
        
        const result = await createClient(data, token)
        if(result.name !== 'AxiosError'){
          toast.success('✔️ Cliente cadastrado com sucesso!')
        }else{
          toast.error('❌ E-mail já cadastrado!')
        }
      }
      
   useEffect(()=>{
    listClients()
   },[])

    async function listClients(){
      const result = await listClient()

      if(result.name !== 'AxiosError'){
        setClients(result.data)
      }
    }

  return (
    <Container>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
      <h3>Cadastro do cliente</h3>
        <input placeholder="Nome completo" type="text" {...register("fullname")} />
        {errors.fullname?.message}

        <input placeholder="Email" type="text" {...register("email")} />
        {errors.email?.message}

        <input placeholder="Telefone" type="text" {...register("telephone")} />
        {errors.telephone?.message}

        <input placeholder="Celular" type="text" {...register("cellphone")} />
        {errors.cellphone?.message}

        <input placeholder="Data de cadastro" type="date"{...register("createdAt")} />
        {errors.createdAt?.message && 'Data obrigatória'}

        <button type="submit">Enviar!</button>
      </form>

      <div className='client'>
        {clients?.map((client) =>{
          return <Client key={client.id} client={client} />
        })}
      </div>
    </Container>
  )
}
