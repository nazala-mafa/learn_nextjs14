// "use client"

import { useState } from "react"

export default function Datatables({datas, config})
{
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        { config?.map((item) => <th>{item}</th>) }
                    </tr>
                </thead>
                <tbody>
                    {
                        config?.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}