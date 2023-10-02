import classes from './Preloader.module.css';
import preloader from '../Common/loading.gif';
let Preloader = (props) => {
    return <div className={classes.preloader}>
        <img src={preloader} />
    </div>
}
export default Preloader;