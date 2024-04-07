import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./features/homepage/Home";
import SignIn from "./features/user/SignIn";
import Profil from "./features/dashboard/Profil";
import Transactions from "./features/dashboard/Transactions";

// Modern way to load or submit by fetching data (dataLoader, dataActions, dataFetcher)

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <SignIn /> },
  { path: "/profile/:userId", element: <Profil /> },
  { path: "/profile/transaction/:transactionId", element: <Transactions /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
