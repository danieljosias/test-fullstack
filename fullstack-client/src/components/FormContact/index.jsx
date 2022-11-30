import React from 'react'
import { Container } from './styles'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function FormContact() {
    const formSchema = yup.object().shape({
        fullname: yup.string().required("Nome completo obrigatório"),
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        cellphone: yup.string().required("Telefone obrigatório"),
        mobile: yup.string(),
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
        <h3>Cadastro do contato</h3>
       <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
         <input placeholder="Nome completo" type="text" {...register("fullname")} />
         {errors.fullname?.message}

         <input placeholder="Email" type="text" {...register("email")} />
         {errors.email?.message}

         <input placeholder="Telefone" type="text" {...register("cellphone")} />
         {errors.cellphone?.message}

         <input placeholder="Celular" type="text" {...register("mobile")} />
         {errors.mobile?.message}

         <button type="submit">Enviar!</button>
       </form>
    </Container>
  )
}
