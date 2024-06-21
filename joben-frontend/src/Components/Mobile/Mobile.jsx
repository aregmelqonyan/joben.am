import React from 'react';
import styles from './Mobile.module.css'; 
import Groupmobile from "../../Assets/Groupmobile.png";
import Group86 from "../../Assets/Group86.png";
import Group87 from "../../Assets/Group87.png";

const Mobile = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Mobile}>
                <div className={styles.genblock}>
                    <h2 className={styles.Mobileh2}>Joben Mobile</h2>
                    <div className={styles.wrapper2}>
                        <img src={Groupmobile} alt='Groupmobile' className={styles.main_image} />
                        <div className={styles.text_box}>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            <ul>
                                <li>Proin maximus ullamcorper elit, eget semper diam blandit eget.</li>
                                <li>Curabitur sodales imperdiet diam a malesuada. Nunc vel cursus sapien</li>
                                <li>Integer nibh sem, vulputate nec vestibulum in, sodales sit amet orci.</li>
                            </ul>
                            <div className={styles['image-container']}>
                                <img src={Group86} className={styles.img_primary} alt="Image 1" />
                                <img src={Group87} className={styles.img_primary} alt="Image 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobile;