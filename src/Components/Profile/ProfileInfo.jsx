import React from 'react';
import styles from './Profile.module.css';
import Status from './Status';


const ProfileInfo = (props) => {
    return (
        <div className={styles.description}>
            <h3 className={styles.head}>{props.profile?.fullName != null ? props.profile?.fullName : "Anna Kuzmina"}</h3>
            <Status status={props.status} updateStatus={props.updateStatus} />
            <div>
                <img src={props.profile?.photos?.large != null ? props.profile?.photos?.large : '../../post.images.jpeg'} className={`${styles.usrPhoto} ${styles['slide-in-fwd-center']}`} />
            </div>
        </div>
    )
}
export default ProfileInfo;