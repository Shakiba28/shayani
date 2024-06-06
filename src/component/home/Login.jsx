
export default function Login() {

    return (
        <>
            <div className="flex mb-5">
                <div className="p-4 text-white">
                    <h1 className="text-3xl font-bold">نرم افزار هوشمند مطب شایانی</h1>
                    <p className="border-r-2 my-4 px-2 w-1/2 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگر و متون بپگرها و متون بلکه روزنامه و مجله...</p>
                    <button className="border rounded-lg px-4 py-2">بیشتر بدانید</button>
                </div>
                <div className="bg-white shadow-lg px-10 py-2 rounded-lg">
                    <span className="text-center text-sky-600 font-bold">ورود با کاربری بیمه سلامت</span>
                    <div className="flex flex-col my-4">
                        <input className=" placeholder:text-black bg-gray-200 rounded-md p-1 mb-2" type="text" placeholder="کدملی" />
                        <input className=" placeholder:text-black bg-gray-200 rounded-md p-1 mb-4" type="password" placeholder="کلمه عبور" />
                        <div>
                            <button className="bg-green-500 px-2 py-1 rounded-md text-white ml-1">ورود</button>
                            <button className="bg-sky-500 px-2 py-1 rounded-md text-white mr-1">فراموشی کلمه عبور</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="">
                <img className="" src="../../../public/Vector Smart Object.png" alt="" />
            </div>
        </>
    )
}