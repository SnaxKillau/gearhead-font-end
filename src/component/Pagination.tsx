import React, { useEffect, useState } from "react";
import rightArrow from "../component/image/right-arrow.png";
import leftArrow from "../component/image/left-arrow.png";
import { fetchTransforamtionByBrandWithOtherPage } from "../redux/action/TransfomationByBrandAction";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./type/type";


interface PaginationProps {
  brand :string | undefined
}

const Pagination: React.FC<PaginationProps> = ({ brand }) => {
  const [prevDisable, setPrevDisable] = useState<boolean>(false);
  const [nextDisable, setNexDisble] = useState<boolean>(false);
  const dispatch = useDispatch<any>();
  const data = useSelector(
    (state: IRootState) => state.transfomationByBrandReducer
  );
  const [pageNum, setPageNum] = useState<number>(
    data?.transfomationByBrand?.numberOfPage
  );
  const [pageIndex ,setPageIndex] = useState<number>(
    data?.pageIndex
  )
  useEffect(() => {
    setPageIndex(data?.pageIndex)
    if(pageIndex >= data?.transfomationByBrand.numberOfPage){
      setNexDisble(true)
    }
    if(pageIndex <= 1){
      setPrevDisable(true)
    }
  },[data?.pageIndex])
  useEffect(() => {
    const newPageNum = data?.transfomationByBrand?.numberOfPage;
    if (newPageNum !== undefined) {
      setPageNum(newPageNum);
    }
  }, [data?.transfomationByBrand?.numberOfPage]);


  const next = (): void => {
   if(pageIndex < data?.transfomationByBrand.numberOfPage){
    setPageIndex(pageIndex)
    dispatch(fetchTransforamtionByBrandWithOtherPage(brand , pageIndex + 1))
   }
  };

  const prev = (): void => {
    if(pageIndex > 1){
      setPageIndex(pageIndex - 1)
      dispatch(fetchTransforamtionByBrandWithOtherPage(brand , pageIndex - 1))
    }
  };
  
  return (
    <div className="h-10 flex justify-center items-center">
      <img src={leftArrow} className="w-4 mr-2" alt="left arrow" />
      <button
        onClick={prev}
        disabled={prevDisable}
        className={prevDisable ? "text-gray-400" : ""}
      >
        Prev
      </button>
      <div
          className={"ml-5 bg-black w-5 h-5 rounded-md md:w-8 md:h-8 text-white"}
        >
          <h1 className=" md:mt-1 text-center">{pageIndex}</h1>
        </div>
      <div className="flex space-x-2">
        <button
          onClick={next}
          className={`ml-5 ${nextDisable ? "text-gray-400" : ""}`}
        >
          Next
        </button>
        <img src={rightArrow} className="w-4" alt="right arrow" />
      </div>
    </div>
  );
};

export default Pagination;
