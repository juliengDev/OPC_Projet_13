import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default AppLayout;
