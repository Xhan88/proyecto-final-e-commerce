import { useEffect } from "react"
import '../Loading/Loading.css'
const Loading = () => {

    useEffect(() => {
        return () => {
        }
    })
    return (
        <div className="spinner-border " role="status">
  <span className="sr-only"></span>
</div>
    )
}

export default Loading
