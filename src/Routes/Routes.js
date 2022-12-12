import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           
            {
                path: '/projectDetails/:id',
                element: <ProjectDetails></ProjectDetails>,
                loader: ({ params }) => fetch(`https://portfolio-server-coral.vercel.app/projects/${params.id}`)
            },
        ]
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    
])

export default router;