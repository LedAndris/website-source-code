import Link from 'next/link'
import {btn} from '../styles/Global.module.css'

const NotFound = () => {
    return (
        <div>
            <div>
                <img src="https://beta.iodine.gg/gg80b.webp" width="1000px"></img>
                <Link href="/">
                <button className={btn}>Go home!</button>
                </Link>
            </div>
        </div>
    );
}
 
export default NotFound;