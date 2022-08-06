import React, { useEffect, useState, useRef } from "react";
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

import Dialog from "../components/Dialog";

function TimetableDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameTimetable: "",
  });

  const idTimetableRef = useRef();

  const handleDialog = (message, isLoading, nameTimetable) => {
    setDialog({
      message,
      isLoading,
      nameTimetable,
    });
  };

  const { user } = useSelector((state) => state.auth);

  let filterTimetableByUser;

  const { timetables, isLoading, isError, message } =
    useSelector(selectAllTimetables);

  if (user) {
    filterTimetableByUser = timetables.filter(
      (timetable) => timetable.userId === user._id
    );
  }

  const handleDelete = (timetableId) => {
    const timetable = filterTimetableByUser.find((t) => t._id === timetableId);
    handleDialog("Are you sure you want to delete this?", true, timetable);
    idTimetableRef.current = timetableId;
  };

  const confirmDelete = (choose) => {
    if (choose) {
      handleDialog("", false);
      dispatch(deleteTimetable(idTimetableRef.current));
    } else {
      handleDialog("", false);
    }
  };

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
        Cell: ({ value }) => (
          <div className="text-sm text-gray-500">
            {moment(value).format("DD-MMM-YYYY")}
          </div>
        ),
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
            <button onClick={() => handleDelete(row.row.original._id)}>
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
        {dialog.isLoading && (
          <Dialog
            nameTimetable={dialog.nameTimetable}
            message={dialog.message}
            onDialog={confirmDelete}
          />
        )}
      </div>
    </section>
  );
}

export default TimetableDashboard;
