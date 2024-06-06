import { BsPersonFill } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";

export default function LastVideo() {

    const videos = [
        { title: "عنوان : واکسن کرونا", doctor: "دکتر لورم ایپسوم", views: 1236, comments: 124, image: "../../../public/eduvideo.png" },
        { title: "عنوان : واکسن کرونا", doctor: "دکتر لورم ایپسوم", views: 1236, comments: 124, image: "../../../public/eduvideo.png" },
        { title: "عنوان : واکسن کرونا", doctor: "دکتر لورم ایپسوم", views: 1236, comments: 124, image: "../../../public/eduvideo.png" },
    ];

    return (
        <>

            <div className="py-10 mx-auto bg-sky-700">
                <h2 className="text-center mb-8 text-white text-3xl font-semibold">آخرین ویدیو ها</h2>
                <div className="flex justify-center space-x-4">
                    {videos.map((video, index) => (
                        <div key={index} className="max-w-xs mx-4 w-full bg-sky-600 p-6 rounded-3xl shadow-lg">
                            <h3 className="text-center mb-2 text-white text-lg font-semibold">{video.title}</h3>
                            <div className="relative">
                                <img src={video.image} alt={video.title} className="mx-auto mb-4 rounded" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="">
                                        <FaCirclePlay className="text-3xl text-gray-400" />
                                    </button>
                                </div>
                            </div>
                            <p className="flex justify-center text-sm text-white"><BsPersonFill className="text-2xl" />{video.doctor} </p>
                            <div className="flex justify-center items-center mt-4">
                                <span className="mx-2 px-2 text-sky-600 bg-white rounded-md">{video.comments} نظر   {video.views} بازدید</span>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="px-8 py-2 bg-green-500 text-white rounded-lg">ویدیو های بیشتر</button>
                </div>
            </div>
        </>
    )
}