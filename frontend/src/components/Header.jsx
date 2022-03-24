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
    <div className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link to='/timetabledashboard'>University Timetable</Link>
          </div>
          <div className='md:flex items-center justify-end md:flex-1 lg:w-0'>
            {user ? (
              <div className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                <button onClick={onLogout}>Logout</button>
              </div>
            ) : (
              <div className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red hover:bg-red'>
                <Link to='/'>Sign In</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
