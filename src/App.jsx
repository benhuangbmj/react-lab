import "./App.css";
import ForwardMethods from "/src/forwardMethods/ForwardMethods";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>React Lab</h1>
          <Outlet />
        </>
      ),
      children: [
        {
          path: "forward-methods",
          element: <ForwardMethods />,
        },
      ],
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
