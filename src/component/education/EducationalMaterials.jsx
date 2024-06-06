import { FaFileAlt } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";

export default function EducationalMaterials() {

    return (
        <>

            <div className="text-white container mx-auto my-10">
                <div className="text-center mb-8">
                    <h1 className="font-bold text-4xl drop-shadow-xl my-8">آموزش شایانی</h1>
                    <p className="mb-14 text-xl mx-auto ">
                        آموزش شایانی مرجعی از منابع آموزشی شامل ویدئوها ،متون نگارش شده و مقالات علمی سایر پزشک های عزیز هست که گردآوری شده.
                    </p>
                    <img className="px-10" src="../../../public/shayaniEduBaner.png" alt="" />
                </div>

                <div className="mx-auto flex flex-col">
                    <div className="flex justify-center my-14">
                        <img className="w-1/4 rounded-xl" src="../../../public/Rectangle.png" alt="" />
                        <div className="mx-8 w-1/4">
                            <h1 className="font-bold text-3xl mb-4"> &#8226;ویدئو و ولاگ</h1>
                            <p className="mb-4">آموزش شایانی مرجعی از منابع آموزشی شامل ویدئوها ،متون نگارش شده</p>
                            <div className="mx-4 p-4 float-left">
                                <PiVideoFill className=" text-4xl text-white" />
                                <span className="text-white">180+</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center my-14">
                        <div className="mx-8 w-1/4">
                            <h1 className="font-bold text-3xl mb-4"> &#8226;مقالات علمی</h1>
                            <p className="mb-4">آموزش شایانی مرجعی از منابع آموزشی شامل ویدئوها ،متون نگارش شده</p>
                            <div className="mx-4 p-4 float-left">
                                <FaFileAlt className=" text-4xl text-white" />
                                <span className="text-white">250+</span>
                            </div>
                        </div>
                        <img className="w-1/4 rounded-xl" src="../../../public/Rectangle.png" alt="" />

                    </div>

                    <div className="flex justify-center my-14">
                        <img className="w-1/4 rounded-xl" src="../../../public/Rectangle.png" alt="" />
                        <div className="mx-8 w-1/4">
                            <h1 className="font-bold text-3xl mb-4"> &#8226;پاسخگویی به سوالات</h1>
                            <p className="mb-4">آموزش شایانی مرجعی از منابع آموزشی شامل ویدئوها ،متون نگارش شده</p>
                            <div className="mx-4 p-4 float-left">
                                <RiMessage2Fill className=" text-4xl text-white" />
                                <span className="text-white">196+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}