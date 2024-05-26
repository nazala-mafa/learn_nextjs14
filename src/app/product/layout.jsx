import Link from "next/link"

export const metadata = {
    title: 'Menu Produk',
    description: 'ini deskripsi menu produk'
}

export default function Layout(props) 
{
    return (
        <nav>
            <div style={{display: 'flex', gap: 20}}>
                <Link href={'/product/create'}>New</Link>
            </div>
            {props.children}
        </nav>
    )
}