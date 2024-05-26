"use client"

import { getProduct } from "@/api/product";
import Datatable from "./Datatable";
import { useEffect, useState } from "react";

export default function Product({ searchParams }) {
    const [datas, setDatas] = useState()

    useEffect(() => {
        getProduct(searchParams.page, searchParams.per_page).then((data) => setDatas(data))
    }, [searchParams])

    return (
        <main>
            <Datatable datas={datas} />
        </main>
    )
}