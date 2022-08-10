import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { reset as test } from "../features/timetables/timetableSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = async () => {
    await dispatch(logout());
    await dispatch(reset());
    await dispatch(test());
    navigate("/");
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto px-8 sm:px-4 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6">
          <div className="font-bold mb-4 sm:mb-0">
            <Link to="/timetable-dashboard">
              <span>University Timetable</span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row">
            {user?.role === "admin" && (
              <div className="cursor-pointer  bg-primary px-4 py-2 mr-4 rounded-md">
                <Link to="/sign-up">Sign Up</Link>
              </div>
            )}
            <div className="cursor-pointer bg-primary px-4 py-2 rounded-md">
              {user ? (
                <button onClick={onLogout}>Logout</button>
              ) : (
                <Link to="/">Sign In</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
