"use client"

import Link from "next/link";
import { useState } from "react";

export default function Post({ searchParams })
{
    const [datas, setDatas] = useState([])

    return (
        <main>
            <h3>
                <Link href={'/post/create'}>New</Link>
            </h3>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>body</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((item, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>
                                    <Link href={`/post/${item.id}/edit`} style={{marginRight: 20}}>edit</Link>
                                    <Link href={`/post/${item.id}`}>detail</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}