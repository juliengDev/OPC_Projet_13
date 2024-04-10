import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./features/homepage/Home";
import SignIn from "./features/customers/SignIn.jsx";
import signInLoader from "./features/customers/signInLoader.js";

import Profil from "./features/accounts/Profil.jsx";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error.jsx";
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
      },
      {
        path: "/profile/:userId",
        element: <Profil />,
        loader: signInLoader,
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
