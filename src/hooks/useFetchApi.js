import { useState, useEffect } from 'react'
import { api } from '../shared/api'

const useFetchApi = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading('Загрузка...')
        setData(null)
        setError(null)

        fetch(`${api.url}/${url}`)
            .then((resp) => {
                setLoading(false)
                if (!resp.ok) {
                    throw new Error()
                }
                return resp.json()
            }).then((data) => {
                setData(data)
            }).catch((error) => {
                setLoading(false)
                console.log(erorr + " bad request");
            })
    }, [url])


    return { data, loading, error }
}

export default useFetchApi