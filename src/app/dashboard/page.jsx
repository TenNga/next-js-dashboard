import style from '../ui/dashboard/dashboard.module.css';
import Card from '../ui/dashboard/card/card';
import Rightbar from '../ui/dashboard/rightbar/rightbar';
import Transaction from '../ui/dashboard/transactions/transactions';
import Chart from '../ui/dashboard/chart/chart';

const Dashboard = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <div className={style.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transaction />
                <Chart />
            </div>
            <div className={style.side}>
                <Rightbar />
            </div>
        </div>
    )
}

export default Dashboard;