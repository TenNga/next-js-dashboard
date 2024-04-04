import style from '../../ui/dashboard/users/users.module.css';
import Search from '../search/search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const UsersPage = () => {
    return (
        <div className={style.container}> 
            <div className={style.top}>
                 <Search placeholder="Search for a user..."/>
                 <Link href='/dashboard/users/add'>
                    <button className={style.addButton}>Add User</button>
                 </Link>
            </div>
            <div className={style.table}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Created At</td>
                            <td>Role</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={style.user}>
                                    <Image src="/noavatar.png" alt="No avatar" width={40} height={40} className={style.userImage} />
                                    John Doe
                                </div>
                            </td>
                            <td>john@gmail.com</td>
                            <td>13.04.2020</td>
                            <td>Admin</td>
                            <td>active</td>
                            <td>
                                <div className={style.buttons}>
                                    <Link href="/">
                                        <button className={`${style.button} ${style.view}`}>View</button>
                                    </Link>
                                        <button className={`${style.button} ${style.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
    )
}

export default UsersPage;