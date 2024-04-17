import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Home from "./features/homepage/Home.jsx";
import SignIn from "./features/customers/SignIn.jsx";
import Profil from "./features/accounts/Profil.jsx";
import AccountDetails from "./features/accounts/AccountDetails.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />, // Layout Route
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/profile/:userId",
        element: <Profil />,
        errorElement: <Error />,
      },
      {
        path: "/profile/account/:accountId",
        element: <AccountDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
