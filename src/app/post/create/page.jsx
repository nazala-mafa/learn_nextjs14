"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function PostCreate()
{
    const {
        register,
        handleSubmit,
        formState
    } = useForm()

    useEffect(() => {
        console.log( formState );
    }, [formState])

    return (
        <main>
            
        </main>
    )
}