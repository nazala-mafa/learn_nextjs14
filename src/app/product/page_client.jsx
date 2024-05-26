"use client"

import { getProduct } from "@/api/product";
import Datatable from "./Datatable";
import { useEffect, useState } from "react";

export default function Product()
{
    const [datas, setDatas] = useState()

    useEffect(() => {
        getProduct().then((data) => setDatas(data))
    }, [])
    
    return (
        <main>
            <Datatable datas={datas} />
        </main>
    )
}