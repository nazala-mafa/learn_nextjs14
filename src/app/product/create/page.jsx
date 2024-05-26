"use client"

import { createProduct } from "@/api/product";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"

export default function Create()
{
    const navigator = useRouter()

    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const res  = await createProduct(data)

        if (res.id) {
            navigator.push('/product')
        }
    };

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: 30}}>
                <input type="text" {...register('name')} placeholder="name" />
                <textarea {...register('desc')} placeholder="desc" />

                <button type="submit">save</button>
            </form>        
        </main>
    )
}