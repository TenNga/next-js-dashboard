'use client'
import { usePathname } from 'next/navigation';
import style from './navbar.module.css';
import { MdSearch,MdNotifications, MdOutlineChat, MdPublic } from 'react-icons/md';
const Navbar = () => {
    const pathName = usePathname();
    return (
        <div className={style.container}>
            <div className={style.title}>{pathName.split('/').pop()}</div>
            <div className={style.menu}>
                <div className={style.search}>
                    <MdSearch />
                    <input type='text' placeholder='Search...' className={style.input} />
                </div> 
                <div className={style.icon}>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;