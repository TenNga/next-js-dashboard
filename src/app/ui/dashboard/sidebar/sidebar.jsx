import style from './sidebar.module.css'
import { 
    MdDashboard,
    MdSupervisedUserCircle,
    McShoppingBag } from 'react-icons';

const menuItems = [
    {
        title: 'pages',
        list: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                icon: <MdDashboard/>
            },
            {
                title: 'Users',
                path: '/dashboard/users',
                icon: <MdSupervisedUserCircle/>
            },
            {
                title: 'Products',
                path: '/dashboard/products',
                icon: <McShoppingBag/>
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className={style.container}>Side bar</div>
    )
}

export default Sidebar;