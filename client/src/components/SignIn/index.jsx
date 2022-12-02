import React from 'react'
import { Container } from './styles'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function SignUp() {
    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(formSchema)
      });
    
      const onSubmitFunction = (data) => {
        console.log(data)
        //levar para home
      }

  return (
    <Container>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>SignIn</h3>
            
            <input placeholder="Email" type="text" {...register("email")} />
            {errors.email?.message}

            <input placeholder="Password" type="password" {...register("password")} />
            {errors.password?.message}

            <button type="submit">Entrar!</button>
      </form>
    </Container>
  )
}
