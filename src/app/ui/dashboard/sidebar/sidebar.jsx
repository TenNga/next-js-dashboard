import Menulink from './menuLink/menuLink';
import style from './sidebar.module.css'
import { 
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdWork
     } from 'react-icons/md';

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
                icon: <MdShoppingBag/>
            },
            {
                title: 'Transactions',
                path: '/dashboard/transactions',
                icon: <MdAttachMoney/>
            }
        ]
    },
    {
        title: 'Analytics',
        list: [
            {
                title: 'Revenue',
                path: '/dashboard/revenue',
                icon: <MdWork/>
            },
            {
                title: 'Reports',
                path: '/dashboard/reports',
                icon: <MdAnalytics/>
            },
            {
                title: 'Teams',
                path: '/dashboard/teams',
                icon: <MdPeople/>
            }
        ]
    },
    {
        title: 'User',
        list: [
            {
                title: 'Settings',
                path: '/dashboard/settings',
                icon: <MdOutlineSettings/>
            },
            {
                title: 'Help',
                path: '/dashboard/help',
                icon: <MdHelpCenter/>
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className={style.container}>
            <div className={style.user}>
                <img className={style.userImage} src="/noavatar.png" alt="default user icon" width="50" height="50" />
                <div className={style.userDetails}>
                    <span className={style.userName}>John Lee</span>
                    <span className={style.userTitle}>Administration</span>
                </div>
            </div>
            <ul className={style.list}>
                {menuItems.map(catg => (
                    <li key={catg.title}>
                        <span className={style.catg}>{catg.title}</span>
                        {catg.list.map(item => (
                            <Menulink key={item.title} item={item} />
                        ))}
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Sidebar;