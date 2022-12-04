import React,{useContext} from 'react'
import { ApiContext } from '../../providers/api'
import { Container } from './styles'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify'

const ModalUpdateContactContent = ({handleCloseModal, contact}) => {
    const { updateContact} = useContext(ApiContext)

    const formSchema = yup.object().shape({
        fullname: yup.string().required("Nome completo obrigatório"),
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        telephone: yup.string(),
        cellphone: yup.string().required("Telefone obrigatório")
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
        const id = contact.id

        const res = await updateContact(id,token,data)
        if(res.name !== 'AxiosError'){
            toast.success('✔️ Contato atualizado com sucesso!')
            handleCloseModal()
        }else{
            toast.error('❌ Contato não encontrado')
        }
    }

    return (
    <Container>
        <div className='modalHeader'>
          <h2>Editar contato</h2>
          <button onClick={handleCloseModal}><IoMdCloseCircleOutline/></button>
        </div>

        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>Editar contato</h3>
            <input placeholder="Nome completo" type="text" {...register("fullname")} />
            {errors.fullname?.message}

            <input placeholder="Email" type="text" {...register("email")} />
            {errors.email?.message}

            <input placeholder="Telefone" type="text" {...register("telephone")} />
            {errors.telephone?.message}

            <input placeholder="Celular" type="text" {...register("cellphone")} />
            {errors.cellphone?.message}

            <button type="submit">Editar!</button>
        </form>
    </Container>
  )
}

export default ModalUpdateContactContent