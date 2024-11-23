import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold">Oops!!!</h2>
            <Link className="text-2xl font-bold" to="/">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;