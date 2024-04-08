import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./features/homepage/Home";
import signInLoader from "./features/user/SignInLoader.js";
import SignIn from "./features/user/SignIn";
import Profil from "./features/dashboard/Profil";
import Transactions from "./features/dashboard/Transactions";
import AppLayout from "./ui/AppLayout";

// Modern way to load or submit by fetching data (dataLoader, dataActions, dataFetcher)

const router = createBrowserRouter([
  {
    element: <AppLayout />, // Layout Route
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <SignIn /> },
      { path: "/profile/:userId", element: <Profil />, loader: signInLoader },
      {
        path: "/profile/transaction/:transactionId",
        element: <Transactions />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
