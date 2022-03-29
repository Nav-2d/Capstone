import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <div className='bg-black'>
      <div className='container mx-auto px-8 sm:px-4 text-white'>
        <div className='flex flex-col sm:flex-row justify-between items-center py-6'>
          <div className='font-bold mb-4 sm:mb-0'>
            <Link to='/timetabledashboard'>
              <span>University Timetable</span>
            </Link>
          </div>
          <div className='cursor-pointer  bg-primary px-4 py-2 rounded-md'>
            {user ? (
              <button onClick={onLogout}>Logout</button>
            ) : (
              <Link to='/'>Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
