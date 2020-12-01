import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import useAxiosGet from '../Hooks/HttpRequests'

export default function Home() {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`

    let products = useAxiosGet(url)
    let content = null


    if (products.error) {
        content = <p>Something went <strong>WRONG</strong> Try Again Later</p>
    }

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.data) {
        content =

            products.data.map((product, key) =>
                <div><ProductCard product={product} /></div>
            )

    }
    return (
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>

            {content}
        </div>
    )
}
