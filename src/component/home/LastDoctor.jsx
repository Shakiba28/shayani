import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function LastDoctor() {

    const doctors = [
        { name: "دکتر لورم ایپسوم", specialty: "متخصص لورم ایپسوم متن", image: "../../../public/doctor.png" },
        { name: "دکتر لورم ایپسوم", specialty: "متخصص لورم ایپسوم متن", image: "../../../public/doctor.png" },
        { name: "دکتر لورم ایپسوم", specialty: "متخصص لورم ایپسوم متن", image: "../../../public/doctor.png" },
        { name: "دکتر لورم ایپسوم", specialty: "متخصص لورم ایپسوم متن", image: "../../../public/doctor.png" },
        { name: "دکتر لورم ایپسوم", specialty: "متخصص لورم ایپسوم متن", image: "../../../public/doctor.png" },
        { name: "دکتر لورم ایپسوم", specialty: "متخصص لورم ایپسوم متن", image: "../../../public/doctor.png" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
    };

    return (
        <>

            <div className=" p-10 bg-sky-700">
                <h2 className="text-center text-white text-3xl font-bold p-4 mb-8">آخرین پزشکانی که به مطب شایانی پیوسته اند</h2>
                <Slider {...settings} >
                    {doctors.map((doctor, index) => (
                        <div key={index} className="p-4 px-10">
                            <div className="bg-sky-900 p-6 rounded-lg shadow-lg">
                                <img src={doctor.image} alt={doctor.name} className="mx-auto mb-4" />
                                <h3 className="text-center text-lg bg-white rounded-xl font-semibold mx-16">{doctor.name}</h3>
                                <p className="text-center text-lg bg-white rounded-xl my-2 mx-10">{doctor.specialty}</p>
                                <button className=" px-4 py-2  text-white block mx-auto">برای مشاهده جزئیات کلیک کنید</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </>
    )
}