import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductPage() {
    const {name} = useParams()

    useEffect(() => {
        fetch(`myspecialjsonservice.com/products/${name}`)
        .then (res.json())
        .then(data =>{
            console.log(data)
        })
    }, [])

    return(
        <main>
        <h1>This is the Product Page for {name}</h1>
        </main>
    )
}