import { NavLink } from "react-router-dom"



export default function Header() {
    const navigation = [
        { name: 'صفحه اصلی', href: '/', current: true },
        { name: 'پزشکان ما', href: '/DoctorPage', current: false },
        { name: 'مطالب آموزشی', href: '/Educational', current: false },
        { name: 'شرایط عضویت', href: '/Term', current: false },
    ]

    return (
        <>
            <div className="flex  p-8 justify-between justify-items-center mb-12">
                {/* <ul className="list-none flex text-sky-200">

                    <li className="mx-2"></li>
                    <li className="mx-2"></li>
                    <li className="mx-2"></li>
                    <li className="mx-2"></li>
                </ul> */}
                <div className="flex">
                    {
                        navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive, isPending }) => `${isActive ? 'bg-sky-600 text-white' : 'text-sky-200 hover:text-white hover:drop-shadow-2xl'}
                        rounded-md px-3 py-2 text-sm font-medium`}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </NavLink>
                        ))
                    }
                </div>

                <div className="w-1/12">
                    <img src="../../../public/logo.png" alt="shayani logo" />
                </div>
            </div>

        </>
    )
}