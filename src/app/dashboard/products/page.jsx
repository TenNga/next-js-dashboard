import Link from 'next/link';
import Image from 'next/image';
import Search from '../search/search';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import style from '@/app/ui/dashboard/products/products.module.css';


const ProductsPage = () => {
    return (
        <div className={style.container}> 
            <div className={style.top}>
                 <Search placeholder="Search for a product..."/>
                 <Link href='/dashboard/products/add'>
                    <button className={style.addButton}>Add Product</button>
                 </Link>
            </div>
            <div className={style.table}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Created At</td>
                            <td>Stock</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={style.product}>
                                    <Image src="/noproduct.jpg" alt="No avatar" width={40} height={40} className={style.productImage} />
                                    IPhone
                                </div>
                            </td>
                            <td>Desc</td>
                            <td>$999</td>
                            <td>13.01.2024</td>
                            <td>72</td>
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

export default ProductsPage;