import React,{useContext} from 'react'
import { ApiContext } from '../../providers/api'
import { Container } from './styles'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const { createLogin } = useContext(ApiContext)
  const history = useHistory()

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
  
    const onSubmitFunction = async (data) => {
      const result = await createLogin(data)
      localStorage.setItem('token', result.data.token)

      if(result.name !== 'AxiosError'){
        history.push('/client')
        toast.success('Login bem sucedido')
      }
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
            <div>
              <span>Ainda não tem conta?</span> <Link to='signup'>Cadastre-se</Link>
            </div>
      </form>
    </Container>
  )
}
