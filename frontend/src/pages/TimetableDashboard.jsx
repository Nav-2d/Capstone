import React, { useEffect } from "react";
import Table from "./Table";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  getTimetables,
  deleteTimetable,
  copyTimetable,
  selectAllTimetables,
} from "../features/timetables/timetableSlice";

function TimetableDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  let filterTimetableByUser;

  const { timetables, isLoading, isError, message } =
    useSelector(selectAllTimetables);

  if (user) {
    filterTimetableByUser = timetables.filter(
      (timetable) => timetable.userId === user._id
    );
  }

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }
    dispatch(getTimetables());
  }, [user, navigate, isError, message, dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Subject",
        accessor: "subject",
      },
      {
        Header: "Term Code",
        accessor: "term_code",
      },
      {
        Header: "Created At",
        accessor: "createdAt",
        Cell: ({ value }) => moment(value).format("DD-MMM-YYYY"),
      },
      {
        Header: "",
        id: "viewRow",
        Cell: (row) => (
          <div className="text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full">
            <Link to={`/timetable-dashboard/${row.row.original._id}`}>
              <span>View</span>
            </Link>
          </div>
        ),
      },
      {
        Header: "",
        id: "editRow",
        Cell: (row) => (
          <div className="text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full">
            <Link to={`/edit-timetable/${row.row.original._id}`}>
              <span>Edit</span>
            </Link>
          </div>
        ),
      },
      {
        Header: "",
        id: "deleteRow",
        Cell: (row) => (
          <div className="text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full">
            <button
              onClick={() => dispatch(deleteTimetable(row.row.original._id))}
            >
              Delete
            </button>
          </div>
        ),
      },
      {
        Header: "",
        id: "copyRow",
        Cell: (row) => (
          <div className="text-sm text-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-center rounded-full">
            <button
              onClick={() => dispatch(copyTimetable(row.row.original._id))}
            >
              Copy
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(
    () => filterTimetableByUser,
    [filterTimetableByUser]
  );

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <section className="container mx-auto pt-20">
      <div className="px-4">
        <div className="flex justify-between items-center mb-10">
          <div className="font-extrabold">
            <h1 className="text-3xl md:text-4xl  font-heading mt-3 mb-4">
              Timetable Dashboard
            </h1>
            <span className="text-lg text-primary">View or add timetables</span>
          </div>
          <div>
            <Link
              to="/add-timetable"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Add</p>
            </Link>
          </div>
        </div>
        <Table columns={columns} data={data} />
      </div>
      {/* <div className='max-w-lg pt-10'>
          <div className='flex flex-wrap -mx-2 justify-center'>
            <div className='flex-grow w-full md:w-auto px-2 mb-2'>
              <input
                className='inline-block w-full p-4 text-lg font-bold placeholder-gray-500 shadow border-2 border-primary rounded outline-none'
                type='email'
                placeholder='Search for timetables'
              />
            </div>
            <div className='w-full md:w-auto px-2 mb-2'>
              <a
                className='inline-flex items-center justify-center w-full md:w-auto h-full py-4 px-5 text-center leading-6 text-lg text-white font-extrabold bg-primary hover:bg-primary border-3 border-primary rounded transition duration-200'
                href='/'
              >
                Search
              </a>
            </div>
          </div>
        </div> */}
      {/* <div className='relative rounded-xl overflow-auto pt-10'>
        <div className='shadow-sm overflow-hidden my-8'>
          <table className='border-collapse table-auto w-full text-sm'>
            <thead className='bg-white py-12'>
              <tr>
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left'>
                  Subject
                </th>
                <th className='border-b font-medium p-4 pt-0 pb-3 text-primary text-left'>
                  Term Code
                </th>
                <th className='border-b font-medium p-4 pr-8 pt-0 pb-3 text-primary text-left'>
                  Created On
                </th>
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
              </tr>
            </thead>
            <tbody className='bg-white'>
              {filterTimetableByUser?.map((timetable, key) => {
                return (
                  <tr key={key}>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black '>
                      {timetable.subject}
                    </td>
                    <td className='border-b border-slate-100  p-4 text-black '>
                      {timetable.term_code}
                    </td>
                    <td className='border-b border-slate-100  p-4 pr-8 text-black'>
                      {moment(timetable.createdAt).format('DD-MMM-YYYY')}
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to={`/edit-timetable/${timetable._id}`}>
                        <span>Edit</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to={`/timetable-dashboard/${timetable._id}`}>
                        <span>View</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <button
                        onClick={() => dispatch(deleteTimetable(timetable._id))}
                      >
                        Delete
                      </button>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/course-dashboard'>
                        <span>Copy</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/course-dashboard'>
                        <span>Export CSV</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div> */}
    </section>
  );
}

export default TimetableDashboard;
