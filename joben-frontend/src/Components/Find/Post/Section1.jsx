import React from 'react';
import styles from './Section1.module.css'; 
import '../../Common/style.css'; 
import { NavLink, useNavigate } from 'react-router-dom';

const Section1 = () => {
    const navigate = useNavigate();

    const handlePostJobClick = (destination) => {
        const accessToken = localStorage.getItem('accessToken');
        const company = localStorage.getItem('company');

        if (!accessToken || !company) {
            console.error('User is not authorized');
            navigate('/login_company');
            // You can handle unauthorized access here, such as showing a message or redirecting to a login page
        } else {
            navigate(destination);
        }
    };

    return (
        <div className={styles.Container}>
            <div className={styles.PageSection}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <NavLink to='/jobs' className={styles.link}>
                            <h2 className={styles.h21tit}>Find a Job</h2>
                            <p className={styles.h21}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque quaerat, adipisci magnam suscipit impedit consequuntur voluptatum tempora eveniet quisquam quam vitae autem. Magnam minima adipisci velit perspiciatis sequi maxime?</p>
                            <button className={styles['btn-primary1']}>Post a featured job</button>
                        </NavLink>
                    </div>
                    <div className={styles.column2}>
                        <div onClick={() => handlePostJobClick('/createJob')} className={styles.link}>
                            <h2 className={styles.h22tit}>Post a Job</h2>
                            <p className={styles.h22}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, facere ut mollitia quod dolore minima voluptatibus dolorum optio debitis eius ipsam repellat sed voluptas architecto maxime culpa iure atque assumenda!</p>
                            <button className={styles['btn-primary2']}>Post a free job</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
