import classes from './Loader.module.css';

let Loader = () => {
    return (
        <div className={classes.icon_apple}>
            <div className={classes.apple_tail}></div>
            <div className={classes.apple_main}></div>
            <div className={classes.apple_body}></div>
            <div className={`${classes.bite_body} ${classes.bite1}`}></div>
            <div className={`${classes.bite_body} ${classes.bite2}`}></div>
            <div className={`${classes.bite_body} ${classes.bite3}`}></div>
            <div className={`${classes.bite_body} ${classes.bite4}`}></div>
            <div className={`${classes.bite_body} ${classes.bite5}`}></div>
            <div className={`${classes.bite_body} ${classes.bite6}`}></div>
        </div>
    );
}
export default Loader;


