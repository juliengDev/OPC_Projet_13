import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error.jsx";
import Home from "./features/homepage/Home";
import SignIn from "./features/customers/SignInv1.jsx";
import { action as customerLoginAction } from "./features/customers/customerLogin.js";
import Profil from "./features/accounts/Profil.jsx";
import AccountDetails from "./features/accounts/AccountDetails.jsx";

// Modern way to load or submit by fetching data (dataLoader, dataActions, dataFetcher)

const router = createBrowserRouter([
  {
    element: <AppLayout />, // Layout Route
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <SignIn />,
        action: customerLoginAction,
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
