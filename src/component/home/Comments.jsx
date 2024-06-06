
export default function Comments() {

    return (
        <>
            <div className="my-10 shadow-lg py-4 rounded-md">
                <h1 className="text-white text-3xl font-bold text-center">نظرات مراجعین</h1>

                <div className="flex my-10">


                    <div className="mx-auto basis-1/4">
                        <div className="flex  my-4">
                            <img className="w-20" src="../../../public/doctor.png" alt="" />
                            <h1 className="bg-white h-1/2 self-center rounded-lg px-2 py-1 font-bold">مراجعه کننده دکتر فاطمی</h1>
                        </div>
                        <p className="bg-white shadow-lg text-justify p-4 rounded-2xl">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                    </div>

                    <div className="mx-auto basis-1/4">
                        <div className="flex  my-4">
                            <img className="w-20" src="../../../public/doctor.png" alt="" />
                            <h1 className="bg-white shadow-lg h-1/2 self-center rounded-lg px-2 py-1 font-bold">مراجعه کننده دکتر فاطمی</h1>
                        </div>
                        <p className="bg-white text-justify p-4 rounded-2xl">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                    </div>

                    <div className="mx-auto basis-1/4">
                        <div className="flex  my-4">
                            <img className="w-20" src="../../../public/doctor.png" alt="" />
                            <h1 className="bg-white h-1/2 self-center rounded-lg px-2 py-1 font-bold">مراجعه کننده دکتر فاطمی</h1>
                        </div>
                        <p className="bg-white shadow-lg text-justify p-4 rounded-2xl">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                    </div>
                </div>
                <button className="text-white shadow-lg flex bg-green-500 px-4 py-2 rounded-lg mx-auto">نظرات بیشتر</button>

            </div>

        </>
    )
}