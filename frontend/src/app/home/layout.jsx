import NavHome from "@/components/home/navbar/NavHome";

export const metadata = {
  title: "MiFinanz",
  description: "Home MiFinanz",
};

const LayoutHome = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <NavHome />
      {children}
    </div>
  );
};

export default LayoutHome;
