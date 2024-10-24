import { useForm } from "react-hook-form"
import { BlItem } from "../../pages/ConciliacaoBLs"

const FormConciliacao = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<BlItem>({
        mode: 'all',
        criteriaMode: 'all'
    })

    const handleDataSubmit = (data: any) => {
        console.log(data)
    }

    return {
        register, handleSubmit, errors, setValue, handleDataSubmit
    }
}

export default FormConciliacao