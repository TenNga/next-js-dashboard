import style from './rightbar.module.css';
import {MdPlayCircleFilled, MdReadMore} from 'react-icons/md';
import Image from 'next/image';


const Rightbar = () => {
    return(
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.bgContainer}>
                     <Image src="/astronaut.png" alt="background" fill className={style.bg}/>
                </div>
                <div className={style.texts}>
                    <span className={style.notification}> 🔥 Available Now</span>
                    <h3 className={style.title}>how to use the new version of the admin dashboard?</h3>
                    <span className={style.subtitle}>Take 4 minutes to learn</span>
                    <p className={style.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium pariatur at fugiat ex! Expedita deserunt ab perspiciatis rerum.
                    </p>
                    <button className={style.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
            <div className={style.item}>
                {/* <div className={style.bgContainer}>
                     <Image src="/astronaut.png" alt="background" fill/>
                </div> */}
                <div className={style.texts}>
                    <span className={style.notification}>🚀 Coming Soon</span>
                    <h3 className={style.title}>how to use the new version of the admin dashboard?</h3>
                    <span className={style.subtitle}>Take 4 minutes to learn</span>
                    <p className={style.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium pariatur at fugiat ex! Expedita deserunt ab perspiciatis rerum.
                    </p>
                    <button className={style.button}>
                        <MdReadMore/>
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Rightbar;