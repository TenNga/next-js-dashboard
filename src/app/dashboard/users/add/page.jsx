import style from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
    return (
        <div className={style.container}>
            <form action="" className={style.form}>
                <input className={style.primary_input} type="text" placeholder='username' name='username' required />
                <input className={style.primary_input} type="email" placeholder='email' name='email' required />
                <input className={style.primary_input} type="password" placeholder='Password' name='password'/>
                <input className={style.primary_input} type="phone" placeholder='phone' name='phone'/>
                <select className={style.select} name="isadmin" id="isadmin">
                    <option value="general">Is Admin?</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
                <select className={style.select} name="isactive" id="isactive">
                    <option value="general">Is Active</option>
                    <option value="false">no</option>
                    <option value="true">yes</option>
                </select>
                <textarea  className={style.area} name="address" id="address" rows="16" placeholder='Address'></textarea>
                <button className={style.submit_btn} type='submit'>Submit</button>
            </form>
        </div>
    )

};


export default AddUserPage;