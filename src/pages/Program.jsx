import React, { useEffect, useState } from "react";
import ProgramCard from "../components/Program/ProgramCard";
import ProgramList from "../components/Program/ProgramList";
import { IconBasketPlus } from "@tabler/icons-react";
import { Button, Modal } from "@mantine/core";
import axios from "axios";
import { useSelector } from "react-redux";
import { get } from "../Global/api";

const Program = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [program, setProgram] = useState();
  const [refresh, setRefresh] = useState(false);
  const token = useSelector((state) => state?.user?.access);

  const fetchProgram = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/programs`,
        {
          headers: {
            Authorization: `Bearer ${token?.accessToken}`,
          },
        }
      );
      console.log(response);
      setProgram(response?.data?.data);
      setRefresh(refresh);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(token)
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    business_id: token?.id,
  });

  // console.log(token);

  useEffect(() => {
    fetchProgram();
  }, [refresh]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    // Process formData here
    console.log(formData);
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/programs/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setFormData({
        title: "",
        category: "",
      });
      setRefresh(!refresh);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(formData);
  // console.log(program);
  const handleRequestAds = async () => {
    // try {
    //   const response = await get('')
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="flex flex-col gap-10">
      {/* add program  */}
      <div
        onClick={openModal}
        className="flex gap-3 self-start text-white p-2 rounded transition duration-150 cursor-pointer hover:bg-black/70 bg-black"
      >
        <IconBasketPlus />
        <p>create program</p>
      </div>
      {/* program card  */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        {program?.map((el) => {
          return (
            <div
              onClick={handleRequestAds}
              key={el?._id}
              className=" col-span-1"
            >
              <ProgramCard el={el} />
            </div>
          );
        })}
      </div>
      {/* program including blogs  */}
      <ProgramList />
      {/* Add to program */}
      <Modal
        opened={isModalOpen}
        onClose={closeModal}
        title="Create Program"
        size="md"
      >
        {/* Modal content */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-10 w-full h-full"
        >
          {/* program input */}
          <input
            type="text"
            className="outline-none px-3 py-2 border"
            placeholder="Enter New Program Name"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          {/* select category */}
          <div className="flex flex-col gap-3">
            <label className="font-bold">Choose Category</label>
            <select
              className="py-2 px-5 outline-none"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="music">Music</option>
              <option value="sport">Sport</option>
            </select>
          </div>

          {/* buttons */}
          <div className="flex justify-around">
            <Button variant="light" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Program;
