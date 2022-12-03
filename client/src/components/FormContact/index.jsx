import React from 'react'
import { Container } from './styles'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Contact from '../Contact';

export default function FormContact() {
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
    
      const onSubmitFunction = (data) => {
        console.log(data);
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
       <Contact/>
    </Container>
  )
}
