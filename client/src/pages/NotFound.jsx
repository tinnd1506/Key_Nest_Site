import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main className="not-found">
            <span>404</span>
            <h2>Oups! This page doesn't exist</h2>
            <Link to="/">Return Home</Link>
        </main>
    )
}

export default NotFound
