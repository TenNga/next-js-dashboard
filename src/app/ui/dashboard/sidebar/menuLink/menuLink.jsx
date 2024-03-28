const MenuLink = ({item}) => {
    return (
        <Link href={item.path} className={style.container}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default Menulink;