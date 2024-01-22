import { Button, Modal, Select } from "@mantine/core";
import React, { useState } from "react";
import ListTable from "../components/Table/ListTable";

const List = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {/* body  */}
      <div className="shadow-lg rounded-md border mt-5 dark:bg-secondary dark:border-primary">
        {/* Filter entries select and Add program Button*/}
        <div className="px-3 py-5 border-b flex items-center justify-between dark:border-primary">
          {/* litmit of list  */}
          <div className="flex items-center gap-2">
            <Select
              className="w-[70px]"
              value={10}
              data={[
                { value: 5, label: "5" },
                { value: 10, label: "10" },
                { value: 20, label: "20" },
              ]}
              styles={{
                label: { color: "white" },
                input: { ":focus": { borderColor: "#13C4E0" } },
                item: {
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: "#13C4E0",
                      color: "white",
                    },
                  },
                },
              }}
            />
            <p className="text-sm font-semibold text-gray-700 dark:text-white">
              entries per page
            </p>
          </div>
          {/* add to program  */}
          <div>
            <button
              onClick={openModal}
              className="p-3 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl text-white font-bold shadow-lg hover:shadow hover:to-cyan-400 dark:from-iconActive dark:to-blue-600"
            >
              Create Program ( 0 )
            </button>
          </div>
        </div>

        {/* Table */}
        <ListTable checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
      </div>

      {/* Add to program  */}
      <Modal
        opened={isModalOpen}
        onClose={closeModal}
        title="Create Program"
        size="md"
      >
        {/* Modal content */}
        <div className="flex flex-col justify-center gap-10 w-full h-full">
          {/* program select  */}
          <div className="flex flex-col w-full gap-5">
            <input
              type="text"
              className=" outline-none px-3 py-2 border"
              placeholder="Enter New Program Name"
              value="title"
              // onChange={(e) => setTitle(e.target.value)}
              required
            />
            <p>OR</p>

            <div className="flex flex-col gap-3">
              <label className="font-bold " htmlFor="">
                Choose You Created Program
              </label>
              <select
                className="py-2 px-5 outline-none"
                name=""
                id=""
                value="title"
                // onChange={(e) => setTitle(e.target.value)}
              >
                <option value="">Select an option</option>
                {/* {program?.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))} */}
              </select>
            </div>
          </div>

          {/* select category  */}
          <div className="flex flex-col gap-3">
            <label className="font-bold " htmlFor="">
              Choose Category
            </label>
            <select
              className="py-2 px-5 outline-none"
              name=""
              id=""
              value="programCate"
              // onChange={(e) => setProgramCate(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="music">Music</option>
              <option value="sport">Sport</option>
            </select>
          </div>

          {/* button  */}
          <div className="flex justify-around">
            {/* Submit button */}
            <Button variant="primary">Submit</Button>

            {/* Example Close button */}
            <Button variant="light" onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default List;
