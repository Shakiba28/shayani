import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function Footer() {

    return (
        <>
            <div className="flex bg-zinc-700 p-10 text-white">
                <div className="">
                    <img className="w-1/6" src="../../../public/logo.png" alt="" />
                    <p className="w-1/2 my-5 font-light text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..
                    </p>

                    <div className="my-10 ">
                        <div className="flex">
                            <span className="font-bold">آدرس:</span>
                            <p className="mx-2 font-light">نیشابور، بلوار پژوهش، پارک علم و فناوری، واحد 23</p>
                        </div>

                        <div className="flex">
                            <span className="font-bold">تلفن تماس:</span>
                            <p className="mx-2 font-light">051123456789 - 05123456789</p>
                        </div>
                    </div>


                    <div >
                        <h1 className="font-bold text-xl">مارا در شبکه های اجتماعی دنبال کنید</h1>
                        <div className="flex my-4">
                            <FaFacebookF className="mx-2 bg-white text-zinc-600 text-4xl rounded-full p-2" />
                            <FaTwitter className="mx-2 bg-white text-zinc-600 text-4xl rounded-full p-2" />
                            <AiFillInstagram className="mx-2 bg-white text-zinc-600 text-4xl rounded-full p-2" />
                            <FaTelegramPlane className="mx-2 bg-white text-zinc-600 text-4xl rounded-full p-2" />
                            <FaLinkedinIn className="mx-2 bg-white text-zinc-600 text-4xl rounded-full p-2" />
                        </div>
                    </div>
                </div>

                <div className="w-2/3">
                    <h1 className="font-bold text-xl mb-8 flex"><HiOutlineSpeakerphone className="text-4xl p-1 border ml-2 rounded-full" />آخرین مطالب </h1>

                    <div className="flex justify-items-center my-2">
                        <img className="w-20" src="../../../public/person.png" alt="" />
                        <div className="p-2">
                            <span className="font-bold">همکاری با بیش از 5 هزار پزشک</span>
                            <p className="mx-2 font-light">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                    </div>

                    <div className="flex justify-items-center my-2">
                        <img className="w-20" src="../../../public/person.png" alt="" />
                        <div className="p-2">
                            <span className="font-bold">همکاری با بیش از 5 هزار پزشک</span>
                            <p className="mx-2 font-light">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                    </div>

                    <div className="flex justify-items-center my-2">
                        <img className="w-20" src="../../../public/person.png" alt="" />
                        <div className="p-2">
                            <span className="font-bold">همکاری با بیش از 5 هزار پزشک</span>
                            <p className="mx-2 font-light">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-950 text-white text-center p-4">
                کلیه حقوق محفوظ است برای مطب شایانی 1401
            </div>
        </>
    )
}