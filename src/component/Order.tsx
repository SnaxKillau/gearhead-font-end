import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./NavBar";
import { useDropzone } from "react-dropzone";
import { FileWithPath } from "react-dropzone";
import close from "../component/image/close.png";
import { motion } from "framer-motion";

import back from "../component/image/back-button.png";
import axios from "axios";
import Loading from "./Loading";

function Order() {
  const [selectedFile, setSelectedFile] = useState<FileWithPath>();
  const [selectedFilePath, setSelectedFilePath] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [loading , setLoading] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const formData = new FormData();
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setSelectedFilePath(reader.result);
          setSelectedFile(file);
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const convertDate = (inputDate: number) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    const formatedDate = `${year}-${month}-${day}`;
    return formatedDate;
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const uploadBtn = () => {
    const user = localStorage.getItem("currentUser");
    if (user !== null && selectedFile !== undefined) {
      formData.append("name", brand + model); // Assuming brand and model are defined somewhere
      formData.append("userId", user);
      formData.append("source", source);
      formData.append("address" , address)
      formData.append("image", selectedFile);
      formData.append("created", convertDate(Date.now())); // Closing parenthesis added here
      const config = {
        headers: {
          "Content-Type": "application/form-data",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };
      setLoading(true)
      axios.post("http://127.0.0.1:8072/api/order",formData,config)
      .then((res) => {
        setLoading(false)
        setBrand("")
        setSource("")
        setAddress("")
        setSelectedFilePath("")
        setModel("")

      })
      .catch((err) => {setLoading(false)})
    }
  };
  const nextBtn = () => {
    setIsVisible(true);
  };

  return (
    <div className="h-[110vh]">
      <div className="bg-black h-20">
        <Navbar />
      </div>
      <div>
        {loading ? <Loading/> : <div className="p-10">
          <h1 className="text-xl md:text-3xl font-bold">Order</h1>
          <h1 className="mt-2 text-lg font-light">
            Make the order here. Safe and Affordable
          </h1>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when visible
              exit={{ opacity: 0, x: -20 }} // Animation when hiding
              transition={{ duration: 0.3 }}
              className="grid justify-center items-center h-[75vh]"
            >
              <div className="w-[80vw] h-5/6 bg-white shadow-lg shadow-red-500 p-10">
                <div className="flex items-center justify-center w-full">
                  <label
                    {...getRootProps()}
                    className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer ${
                      isDragActive
                        ? "bg-gray-100 dark:bg-gray-600"
                        : "bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    }`}
                  >
                    <input
                      {...getInputProps()}
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                  </label>
                  <button
                    className=" absolute top-20 left-2"
                    onClick={() => setIsVisible(false)}
                  >
                    <img src={back} className=" w-10" />
                  </button>
                </div>
                {selectedFilePath ? (
                  <div className=" w-[30vw] h-16 bg-gray-100  rounded-xl flex items-center border-black mt-10 p-2 relative">
                    <img
                      src={selectedFilePath}
                      className=" w-14 h-14 rounded"
                    />
                    <h1 className=" pl-4">{selectedFile?.name}</h1>
                    <img
                      src={close}
                      className=" absolute w-3 top-2 right-[4%]"
                      onClick={() => {
                        setSelectedFilePath("");
                      }}
                    />
                  </div>
                ) : null}
                <div className=" grid justify-center items-center">
                  {selectedFile ? (
                    <div className=" mt-5 text-lg font-Kanit bg-red-800 h-10 text-white rounded-md shadow-red-400 shadow-lg text-center w-[50vw] md:w-[15vw] md:mt-4">
                      <button
                        className=" mt-1"
                        onClick={() => {
                          uploadBtn();
                        }}
                      >
                        Upload Image
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div className="grid justify-center items-center h-[75vh]">
              <div className="w-[80vw] h-5/6 bg-white shadow-lg shadow-red-500 p-3">
                <h1 className=" text-2xl font-bold text-center">Order</h1>
                <div className="flex w-full p-7">
                  <div className=" grid text-lg text-red-800">
                    <h1 className="font-Kanit">Item Brand</h1>
                    <input
                      onChange={(e) => setBrand(e.target.value)}
                      value={brand}
                      type="text"
                      className=" mr-12 mt-2 md:mt-4 h-16 md:h-10 w-[65vw] md:w-[70vw] p-2 focus:outline-red-800 shadow-red-400 shadow-sm bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2"
                      placeholder="Enter brand of item"
                    />
                    <h1 className="font-Kanit mt-2 md:mt-5">Item Model</h1>
                    <input
                      onChange={(e) => setModel(e.target.value)}
                      value={model}
                      type="text"
                      className=" mr-12 mt-2 md:mr-0 md:mt-4 h-16 md:h-10 w-[65vw] md:w-[70vw] focus:outline-red-800 shadow-red-400 shadow-sm p-2 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2"
                      placeholder="Enter model of item"
                    />
                    <h1 className="font-Kanit mt-2 md:mt-5">Source</h1>
                    <input
                      onChange={(e) => setSource(e.target.value)}
                      type="text"
                      value={source}
                      className=" mr-12 mt-2 md:mr-0 md:mt-4 h-16 md:h-10 w-[65vw] md:w-[70vw] focus:outline-red-800 shadow-red-400 shadow-sm p-2 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2"
                      placeholder="Please give the source referent"
                    />
                      <h1 className="font-Kanit mt-2 md:mt-5">Address</h1>
                      <input
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      value={address}
                      className=" mr-12 mt-2 md:mr-0 md:mt-4 h-16 md:h-10 w-[65vw] md:w-[70vw] focus:outline-red-800 shadow-red-400 shadow-sm p-2 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2 mb-10"
                      placeholder="Enter your address"
                    />
                    <div className=" grid justify-center items-center">
                    <div
                      className=" mt-5 text-lg font-Kanit bg-red-800 h-10 text-white rounded-md shadow-red-400 shadow-lg text-center w-[50vw] md:w-[15vw] md:mt-4"
                      onClick={() => {
                        nextBtn();
                      }}
                    >
                      <button>Next</button>
                   </div>
                    </div>
                 
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>}
      </div>
    </div>
  );
}

export default Order;
