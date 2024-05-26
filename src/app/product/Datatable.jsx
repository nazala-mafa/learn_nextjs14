"use client"

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Datatable({ datas }) {
    const search = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const page = search.get('page') || 1
    const per_page = search.get('per_page') || 5

    const prev = () => {
        if (page <= 1) return;
        router.replace(`${path}?page=${page - 1}&per_page=${per_page}`)
    }
    const next = () => {
        router.replace(`${path}?page=${parseInt(page) + 1}&per_page=${per_page}`)
    }

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>id</th>
                        <th>name</th>
                        <th>desc</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        datas?.map((item, i) => (
                            <tr key={i}>
                                <td>{(i + 1) + ((page-1) * per_page)}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <Link href={`/product/${item.id}/edit`} style={{ marginRight: 10 }}>edit</Link>
                                    <Link href={`/product/${item.id}`}>detail</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div>
                <button onClick={prev}>prev</button>
                <span>{}</span>
                <button onClick={next}>next</button>
            </div>
        </section>
    )
}