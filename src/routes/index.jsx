
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home';
import DoctorPage from '../component/doctors/DoctorPage';
import EducationalMaterials from '../component/education/EducationalMaterials';
import Roots from './Roots';
import Terms from '../component/term/Term';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/DoctorPage',
                element: <DoctorPage />
            },
            {
                path: '/Educational',
                element: <EducationalMaterials />
            },
            {
                path: '/Term',
                element: <Terms />
            },
        ]
    },

])

export default router;