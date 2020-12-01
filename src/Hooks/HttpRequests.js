import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useAxiosGet(url) {
    const [products, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false

        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])
    return products
}
