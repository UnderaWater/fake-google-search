import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const Paths = () => {
    return (
        <div className='p-4'>
            <Routes>
                <Route exact path='/' element={<Navigate replace to="/search" />} />
                {["/search", "/images", "/news"].map((path, index) =>
                    <Route path={path} element={<Results />} key={index} />
                )}
            </Routes>
        </div>
    )
}

export default Paths;