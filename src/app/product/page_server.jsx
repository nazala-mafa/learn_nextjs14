import { getProduct } from "@/api/product";
import Datatable from "./Datatable";

export default async function Product({ searchParams }) {
    const datas = await getProduct(searchParams.page, searchParams.per_page)

    return (
        <main>
            <Datatable datas={datas} />
        </main>
    )
}