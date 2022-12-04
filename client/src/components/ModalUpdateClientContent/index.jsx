import React,{useContext} from 'react'
import { ApiContext } from '../../providers/api'
import { Container } from './styles'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify'

const ModalUpdateClientContent = ({handleCloseUpdateModal, client}) => {
    const { updateClient} = useContext(ApiContext)

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
        const id = client.id
        const res = await updateClient(id,token,data)

        if(res.name !== 'AxiosError'){
            toast.success('✔️ Cliente atualizado com sucesso!')
            handleCloseUpdateModal()
        }else{
            toast.error('❌ Client não encontrado')
        }
    }

    return (
    <Container>
        <div className='modalHeader'>
          <h2>Editar cliente</h2>
          <button onClick={handleCloseUpdateModal}><IoMdCloseCircleOutline/></button>
        </div>

        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>Editar cliente</h3>
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

            <button type="submit">Editar!</button>
        </form>
    </Container>
  )
}

export default ModalUpdateClientContent