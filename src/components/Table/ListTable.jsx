import React from "react";
import { RxDash } from "react-icons/rx";


const ListTable = ({ checkedItems, setCheckedItems }) => {
  // for check and collect id
  const handleCheck = (e, element) => {
    e.stopPropagation();

    const { id } = element;

    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));

    setBlogs((prevBlogs) => {
      if (e.target.checked) {
        return [...prevBlogs, id];
      } else {
        return prevBlogs.filter((blogId) => blogId !== id);
      }
    });
  };

  return (
    <>
      {/* Table Header */}
      <div className="grid grid-cols-12 items-center text-[#344767] dark:text-white dark:border-secondary dark:bg-secondary text-center text-base font-semibold border-b py-3">
        <h1 className="col-span-1"></h1>
        <h1 className="col-span-1">Publish</h1>
        <h1 className="col-span-1">Category</h1>
        <h1 className="col-span-1">Author</h1>
        <h1 className="col-span-1"></h1>
        <h1 className="col-span-3">Blog Title</h1>
        <h1 className="col-span-2">Description</h1>
        <h1 className="col-span-1">Program</h1>
        <h1 className="col-span-1">Date</h1>
      </div>

      {/* Table Row */}
      <div>
        <div className="grid grid-cols-12 items-center text-center py-5 border-b transition-colors hover:bg-gray-200 dark:border-secondary dark:bg-secondary dark:text-white dark:hover:bg-primary">
          <div className="col-span-1 flex justify-center items-center">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={checkedItems[0]}
              onClick={(e) => handleCheck(e, el)}
            />
          </div>

          <div className="col-span-1 cursor-pointer flex justify-center items-center">
            p
          </div>

          <p className="col-span-1">Category</p>
          <p className="col-span-1">Author</p>

          <h1 className="col-span-1"></h1>

          <p className="col-span-3">Title</p>
          {/* description  */}
          <p className="col-span-2">Desc</p>
          {/* program  */}
          <p className="col-span-1 flex justify-center">
            <RxDash />
          </p>
          <h1 className="col-span-1">10.2.2024</h1>
        </div>
        <div className="grid grid-cols-12 items-center text-center py-5 border-b transition-colors hover:bg-gray-200 dark:border-secondary dark:bg-secondary dark:text-white dark:hover:bg-primary">
          <div className="col-span-1 flex justify-center items-center">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={checkedItems[0]}
              // onClick={(e) => handleCheck(e, el)}
            />
          </div>

          <div className="col-span-1 cursor-pointer flex justify-center items-center">
            p
          </div>

          <p className="col-span-1">Category</p>
          <p className="col-span-1">Author</p>

          <h1 className="col-span-1"></h1>

          <p className="col-span-3">Title</p>
          {/* description  */}
          <p className="col-span-2">Desc</p>
          {/* program  */}
          <p className="col-span-1 flex justify-center">
            <RxDash />
          </p>
          <h1 className="col-span-1">10.2.2024</h1>
        </div>
      </div>
    </>
  );
};

export default ListTable;
