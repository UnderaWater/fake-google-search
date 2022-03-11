import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const Paths = () => {
    return (
        <div className='p-4'>
            <Routes>
                <Route exact path='/' element={<Navigate replace to="/search" />} />
                {/* {["/search", "/images", "/news", "/videos"].map((path, index) =>
                    <Route path={path} element={<Results />} key={index} />
                )} */}
                <Route path='/search' element={<Results />} />
                <Route path='/images' element={<Results />} />
                <Route path='/news' element={<Results />} />
                <Route path='/videos' element={<Results />} />
            </Routes>
        </div>
    )
}

export default Paths;