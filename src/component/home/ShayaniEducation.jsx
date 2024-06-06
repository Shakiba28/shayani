import { FaFileAlt, FaRegFileAlt } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";

export default function ShayaniEducation() {

    return (
        <>
            <div className="flex justify-between m-10 text-white">
                <div className="p-4 w-2/4">
                    <h1 className="text-4xl font-bold drop-shadow-lg my-5" >آموزش شایانی</h1>
                    <p className="border-r-2 mt-10 px-2 w-2/3 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگر و متون بپگرها و متون بلکه روزنامه و مجله...</p>


                    <div className="flex justify-items-center my-10 p-10">
                        <div className="mx-4 p-4">
                            <RiMessage2Fill className=" text-4xl text-white" />
                            <span className="text-white">196+</span>
                        </div>
                        <div className="mx-4 p-4">
                            <FaFileAlt className=" text-4xl text-white" />
                            <span className="text-white">250+</span>
                        </div>
                        <div className="mx-4 p-4">
                            <PiVideoFill className=" text-4xl text-white" />
                            <span className="text-white">180+</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col ">
                    <img className="p-5" src="../../../public/edu.png" alt="" />
                    <button className="border rounded-lg px-4 py-2 mx-auto flex"> ورود به بخش بلاگ</button>
                </div>
            </div>
        </>
    )
}