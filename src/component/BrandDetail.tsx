import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import HorizontalScroll from "./HorizontalScroll";
import porsche from "./image/porsche.svg";
import Card from "./Card";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import MobileCard from "./MobileCard";
import close from "./image/close.png";
import filter from "./image/filter.png";
import Pagination from "./Pagination";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchTransforamtionByBrand } from "../redux/action/TransfomationByBrandAction";
import back from "../component/image/back-button.png";
import {
  fetchTransforamtionBySearch,
  clearState,
} from "../redux/action/TranforamtionSearchAction";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./type/type";
import { imageApi } from "../redux/api/image";
interface BrandSearch {
  brand: string | null;
  minPrice: number | null;
  maxPrice: number | null;
}

function BrandDetail() {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const param = useParams();
  const dispatch = useDispatch<any>();
  const data = useSelector(
    (state: IRootState) => state.transfomationByBrandReducer
  );
  const searchState = useSelector(
    (state: IRootState) => state.transfomationBySearchReducer
  );
  const [pageNum, setPageNum] = useState<number>(
    data?.transfomationByBrand?.numberOfPage
  );
  const [pageIndex, setPageIndex] = useState<number>(data?.pageIndex);
  const [searchData, setSearchData] = useState<BrandSearch>({
    brand: null,
    minPrice: null,
    maxPrice: null,
  });
  useEffect(() => {
    setPageIndex(data?.pageIndex);
  }, [data?.pageIndex]);

  useEffect(() => {
    if (searchState?.sucess) {
      nav("/brandFilter");
    }
  }, [searchState?.sucess]);
  useEffect(() => {
    const newPageNum = data?.transfomationByBrand?.numberOfPage;
    if (newPageNum !== undefined) {
      setPageNum(newPageNum);
    }
  }, [data?.transfomationByBrand?.numberOfPage]);
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
    dispatch(fetchTransforamtionByBrand(param.name));
    dispatch(clearState());
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = parseInt(value); // Use parseInt(value) if you expect only integers
    if (!isNaN(numberValue)) {
      setSearchData((prev) => ({
        ...prev,
        minPrice: numberValue,
      }));
    }
  };
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = parseInt(value); // Use parseInt(value) if you expect only integers
    if (!isNaN(numberValue)) {
      setSearchData((prev) => ({
        ...prev,
        maxPrice: numberValue,
      }));
    }
  };
  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchData((prev) => ({
      ...prev,
      brand: value,
    }));
  };
  const submitBtn = () => {
    dispatch(fetchTransforamtionBySearch(searchData));
  };
  const btnClose = () => {
    setIsOpen(false);
  };
  const btnOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className=" h-auto overflow-x-hidden">
      <div className="bg-black h-20">
        <Navbar />
      </div>
      <div>
        <HorizontalScroll />
        <div className=" flex space-x-10 h-32 items-center border-t-[1px] border-gray-200">
        <button>
            <img
              src={back}
              className="w-10 top-24 left-2 absolute"
              onClick={() => {
                nav(-1);
              }}
            />
          </button>
          <img src={imageApi + param.img} className=" h-16 ml-8" />
          <h1 className=" font-Kanit text-4xl">{param.name}</h1>
        </div>
      </div>
      {/* For mobile view*/}
      <div className=" bg-gray-100 md:hidden h-screen w-screen">
        <motion.div
          className={`absolute w-screen h-2/3 col-span-2 bg-white  mt-10 p-10 grid justify-center items-center ${
            isOpen ? "" : "hidden"
          }`}
          initial={{ opacity: 0 }} // Initial opacity when component mounts
          animate={{ opacity: isOpen ? 1 : 0 }} // Animate opacity based on visibility
          transition={{ duration: 0.5 }}
        >
          <img
            src={close}
            className=" absolute top-10 right-5 w-5"
            onClick={() => {
              btnClose();
            }}
          />
          <h1 className=" font-light text-3xl">Filters</h1>
          <h1 className="mt-2">Brands</h1>
          <input
            className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-11/12 pl-2"
            onChange={(e) => handleBrandChange(e)}
          />
          <h1 className="mt-2">Min prices</h1>
          <input
            className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-11/12 pl-2"
            onChange={(e) => handleMinPriceChange(e)}
          />
          <h1 className="mt-2">Max prices</h1>
          <input
            className=" border-2 border-gray-400  h-10 mt-2 rounded-md w-11/12 pl-2"
            onChange={(e) => handleMaxPriceChange(e)}
          />
          <button
            className=" border-2 w-64 h-10 border-black p-2 rounded-lg mt-8"
            onClick={() => submitBtn()}
          >
            Filter
          </button>
        </motion.div>
        <div className=" flex justify-center">
          <button
            onClick={() => {
              btnOpen();
            }}
            className={`h-10 border-2 flex space-x-4 justify-center items-center border-red-700 w-2/3 mt-10 ${
              isOpen ? "hidden" : ""
            }`}
          >
            <img src={filter} className=" w-5" />
            <h1 className=" font-bold text-red-700 text-lg">Filter</h1>
          </button>
        </div>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar md:hidden">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {data?.transfomationByBrand?.transformationDTOS?.map(
              (item: any, index: number) => (
                <Link to={`/detail/${item.id}`} key={index}>
                  <MobileCard
                  key={index}
                  price={item.price}
                  available_unit={item.availableUnit}
                  image={item.image[0]}
                  brand={item.brand}
                  model={item.model}
                />
                </Link>
                
              )
            )}
          </div>
        </div>
        <div className=" mt-10">
          {data?.transfomationByBrand?.numberOfPage != undefined ? (
            <Pagination brand={param.name} />
          ) : null}
        </div>
      </div>

      {/* For pc and table view */}
      <div className="hidden bg-gray-100 md:grid grid-cols-6">
        <div className=" col-span-2 bg-white h-[30rem] mt-10 ml-10 p-10">
          <h1 className=" font-light text-3xl">Filters</h1>
          <h1 className="mt-2">Brands</h1>
          <input
            className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-10/12 pl-2"
            onChange={(e) => handleBrandChange(e)}
          />
          <h1 className="mt-2">Min prices</h1>
          <input
            className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-10/12 pl-2"
            onChange={(e) => handleMinPriceChange(e)}
          />
          <h1 className="mt-2">Max prices</h1>
          <input
            className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-10/12 pl-2"
            onChange={(e) => handleMaxPriceChange(e)}
          />
          <button
            className=" border-2 w-64 h-10 border-black p-2 rounded-lg mt-8"
            onClick={() => submitBtn()}
          >
            Filter
          </button>
        </div>
        <div className=" col-span-4">
          <motion.div className="hidden mt-10 md:grid md:grid-cols-2">
            {data?.transfomationByBrand?.transformationDTOS?.map(
              (e: any, index: number) => {
                return (
                  <div className="h-[80vh]">
                    <Link to={`/detail/${e.id}`} key={index}>
                      <Card
                        brand={e.brand}
                        model={e.model}
                        image={e.image[0]}
                        year={e.year}
                        power={e.power}
                        price={e.price}
                        available_unit={e.availableUnit}
                        top_speed={e.top_speed}
                      />
                    </Link>
                  </div>
                );
              }
            )}
          </motion.div>
        </div>
        <div className=" mb-20 w-screen ">
          {data?.transfomationByBrand?.numberOfPage != undefined ? (
            <Pagination brand={param.name} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BrandDetail;
