import ReactDOM from "react-dom/client" 
import React, { Children } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
import Header from "./Components/Header";

const root=ReactDOM.createRoot(document.getElementById("root"));

const AppLayout=()=>{
    return (
        
        <div className="bg-gray-500">
            <Header/>
        </div>
        
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement: <Error/>},
        
    
   
]);

root.render(<RouterProvider router={appRouter}/>);