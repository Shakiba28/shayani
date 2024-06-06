import { BiSearch } from "react-icons/bi";

export default function AdvanceSearch() {

    return (
        <>
            <div className="my-20 text-center text-white">
                <div className="">
                    <h1 className="font-bold text-2xl my-5">جستوجو پیشرفته</h1>
                    <p className="w-1/3 mb-5 mx-auto">به سادگی پزشک مورد نظر رو پیدا کنید ، فقط کافیه قستمی از نام پزشک، تخصص پزشک یا بیماریتان را داخل کادر روبه رو وارد کنید</p>
                    <input className="p-4 w-1/3 rounded-3xl my-5" type="text" placeholder="جستجو با نام پزشک، بیماری و..." />
                    <button className="py-2 mx-auto px-4 rounded-3xl font-bold bg-green-500 flex justify-items-center"><BiSearch className="m-1 font-bold text-xl" /> جستجو کن </button>
                </div>

            </div>
        </>
    )
}