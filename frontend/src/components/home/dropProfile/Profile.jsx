import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { userLogOut } from "@/redux/features/useInfoSlice";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const {
    user: { name, email },
  } = useAppSelector((store) => store.userInfo);
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(userLogOut());
  };
  return (
    <section className="p-5 rounded-lg text-center w-min-[90vw,min-w-[400px]] bg-mLightGray shadow-sm">
      <FaUserCircle className="text-5xl text-blue-500 mx-auto my-5" />
      <div className="my-5">
        <h3 className="text-lg">
          Nombre:{" "}
          <span className="text-xl text-mWhite font-semibold">{name}</span>{" "}
        </h3>
        <p>
          Email: <span className="text-mWhite">{email}</span>
        </p>
      </div>
      <button
        className="bg-blue-600 text-white text-lg py-1 px-2 rounded-md cursor-pointer transition duration-200 hover:bg-blue-300"
        onClick={signOut}
      >
        Log out
      </button>
    </section>
  );
};

export default Profile;
