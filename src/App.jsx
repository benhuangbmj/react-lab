import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ForwardMethods from "/src/forwardMethods/ForwardMethods";
import Navbar from "/src/navbar/Navbar";
import ErrorBoundaryDemo from "/src/errorBoundary/Demo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1 className="block-centered">React Lab</h1>
          <main>
            <Outlet />
          </main>
        </>
      ),
      children: [
        {
          path: "forward-methods",
          element: <ForwardMethods />,
        },
        {
          path: "navbar",
          element: <Navbar />,
        },
        { path: "error-boundary", element: <ErrorBoundaryDemo /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
