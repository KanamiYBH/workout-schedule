import { useRouteError } from 'react-router-dom';

const Error404 = () => {
    const error = useRouteError();

    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <h1 className='text-3xl font-bold'>404</h1>
            <p className='text-xl mb-3'>
                {error.statusText || error.message}
            </p>
            <p className='text-sm text-slate-600'>Back to <a href="/" className='font-bold hover:text-slate-500'>main</a></p>
        </div>
    )
}

export default Error404