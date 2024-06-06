
export default function LastBlog() {

    const blog = [
        { title: "عنوان : کمبود ویتامین D", details: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ", views: 1236, write: "1 روز پیش" },
        { title: "عنوان : کمبود ویتامین D", details: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ", views: 1236, write: "1 روز پیش" },
        { title: "عنوان : کمبود ویتامین D", details: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ", views: 1236, write: "1 روز پیش" },
    ];

    return (
        <>
            <div className="py-10 mx-auto bg-sky-700">
                <h2 className="text-center mb-8 text-white text-3xl font-semibold">آخرین مطالب </h2>
                <div className="flex justify-center space-x-4">
                    {blog.map((blog, index) => (
                        <div key={index} className="max-w-xs mx-4 w-full bg-sky-600 p-6 rounded-3xl shadow-lg">

                            <div class="flex items-center justify-center my-2">
                                <svg class="w-4 h-4  ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4  ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 ms-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>

                            <h3 className="text-center mb-2 text-white text-lg font-semibold">{blog.title}</h3>
                            {/* <div className="relative">
                                <img src={blog.image} alt={blog.title} className="mx-auto mb-4 rounded" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="">
                                        <FaCirclePlay className="text-3xl text-gray-400" />
                                    </button>
                                </div>
                            </div> */}
                            <p className="flex justify-center p-2 rounded-lg bg-white">{blog.details} </p>
                            <div className="flex justify-center items-center mt-4">
                                <span className="mx-2 px-2 font-light text-white rounded-md">{blog.write} نظر  </span>
                                <span className="mx-2 px-2 font-light text-white rounded-md">{blog.views} بازدید</span>
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