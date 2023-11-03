import NavBar from "@/components/LandinPage/NavBar";
import PrivateRoute from "@/components/ProtectedRoute/PrivateRoute";
import NavHome from "@/components/home/navbar/NavHome";
import TopBar from "@/components/home/topBar/TopBar";

export const metadata = {
  title: "MiFinanz",
  description: "Home MiFinanz",
};

const LayoutHome = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="flex h-full w-full bg-mWhite dark:bg-mDarkGray">
        <NavHome />
        <div className="w-full">
          <TopBar />

          {children}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default LayoutHome;
