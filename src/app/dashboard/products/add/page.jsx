import style from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
    return (
        <div className={style.container}>
            <form action="" className={style.form}>
                <input className={style.primary_input} type="text" placeholder='title' name='title' required />
                <select className={style.select} name="cat" id="cat">
                    <option value="general">Choose a category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input className={style.primary_input} type="number" placeholder='Price' name='price'/>
                <input className={style.primary_input} type="number" placeholder='Stock' name='stock'/>
                <input className={style.primary_input} type="text" placeholder='Color' name='color'/>
                <input className={style.primary_input} type="text" placeholder='Size' name='size'/>
                <textarea  className={style.area} name="desc" id="desc" rows="16" placeholder='Description'></textarea>
                <button className={style.submit_btn} type='submit'>Submit</button>
            </form>
        </div>
    )

};


export default AddProductPage;