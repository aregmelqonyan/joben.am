import {React, useEffect, useState} from 'react';
import styles from './UserProfileHeader.module.css';
import logo from '../../Assets/ProfilePicture.jpg'
import axios from 'axios';

const UserProfileHeader = () => {
    const [userData, setUserData] = useState({
        username: '',
        contact_info: '',
        email: '',
    
    });
    

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('accessToken');
            try {
                const response = await axios.get('http://localhost:8000/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const { username, contact_info, email} = response.data;
                setUserData({ username, contact_info, email});
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []);

    return (
    <> 
    <div className={styles.ProfileName}>
        <div className={styles.ProfileNameItems}>
            <img className={styles.ProfileNameItemsPicture} src={logo} width={165} height={165} alt='Profile' />
            <div className={styles.ProfileNameItemsTextItems}>
                <div className={styles.ProfileNameItemsTexts}>
                    <h2 className={styles.ProfileNameItemsTextsHeader}>{userData.username}</h2>
                    <p className={styles.ProfileNameItemsTextsParagraph}>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna skksnxq. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className={styles.ProfileNameItemsLinks}>
                    <div className={styles.ProfileNameItemsLinksPhone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.9335 9.90336C12.3961 9.78777 11.971 10.0373 11.5946 
                            10.2551C11.2091 10.4797 10.4761 11.0743 10.056 10.9221C7.90487 
                            10.0364 5.88171 8.15363 5.00591 5.9939C4.85155 5.56478 5.4434 
                            4.82713 5.66626 4.4371C5.88253 4.05954 6.12686 3.63042 6.01543 
                            3.08904C5.91472 2.60254 4.61217 0.94511 4.15158 0.491875C3.84781 
                            0.19249 3.53662 0.0278285 3.21718 0.00121652C2.01616 -0.0503442 
                            0.674813 1.5522 0.439562 1.93557C-0.149804 2.75306 -0.146502 
                            3.84082 0.449467 5.15978C1.88574 8.7025 7.31798 14.049 10.874 
                            15.5393C11.5302 15.8462 12.1303 16 12.6693 16C13.1968 16 13.6665 
                            15.8528 14.0701 15.5609C14.3747 15.3854 16.0429 13.9775 15.9992 
                            12.7442C15.9727 12.4298 15.8085 12.1155 15.513 11.8111C15.0631 
                            11.3462 13.4163 10.0048 12.9335 9.90336Z" fill="black"/>
                        </svg>
                        <p className={styles.ProfileNameItemsLinksText}>{userData.contact_info}</p>
                    </div>
                    <div className={styles.ProfileNameItemsLinksMail}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M1.80273 5.29558L9.00003 8.89378L16.1973 5.29558C16.1707 4.83697 15.9697 4.40591 
                            15.6356 4.09068C15.3014 3.77544 14.8594 3.59989 14.4 3.59998H3.60003C3.14066 3.59989 2.69864 
                            3.77544 2.36449 4.09068C2.03035 4.40591 1.82938 4.83697 1.80273 5.29558Z" fill="black"/>
                            <path d="M16.2 7.30615L9.00005 10.9062L1.80005 7.30615V12.6C1.80005 13.0773 1.98969 13.5352 
                            2.32726 13.8727C2.66482 14.2103 3.12266 14.4 3.60005 14.4H14.4C14.8774 14.4 15.3353 14.2103 
                            15.6728 13.8727C16.0104 13.5352 16.2 13.0773 16.2 12.6V7.30615Z" fill="black"/>
                        </svg>
                        <p className={styles.ProfileNameItemsLinksText}>{userData.email}</p>
                    </div>
                    <div className={styles.ProfileNameItemsLinksAddress}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M14.248 6.75C14.248 6.06056 14.1123 5.37787 13.8484 4.74091C13.5846 4.10395 13.1979 
                            3.5252 12.7104 3.03769C12.2228 2.55018 11.6441 2.16347 11.0071 1.89963C10.3702 1.6358 9.68749 
                            1.5 8.99805 1.5C8.30861 1.5 7.62592 1.6358 6.98896 1.89963C6.352 2.16347 5.77324 2.55018 5.28574 
                            3.03769C4.79823 3.5252 4.41152 4.10395 4.14768 4.74091C3.88384 5.37787 3.74805 6.06056 3.74805 
                            6.75C3.74805 7.79025 4.0548 8.75775 4.5768 9.57375H4.5708L8.99805 16.5L13.4253 9.57375H13.42C13.9607 
                            8.73119 14.2481 7.75111 14.248 6.75ZM8.99805 9C8.40131 9 7.82901 8.76295 7.40706 8.34099C6.9851 
                            7.91903 6.74805 7.34674 6.74805 6.75C6.74805 6.15326 6.9851 5.58097 7.40706 5.15901C7.82901 
                            4.73705 8.40131 4.5 8.99805 4.5C9.59478 4.5 10.1671 4.73705 10.589 5.15901C11.011 5.58097 
                            11.248 6.15326 11.248 6.75C11.248 7.34674 11.011 7.91903 10.589 8.34099C10.1671 8.76295
                            9.59478 9 8.99805 9Z" fill="black"/>
                        </svg>
                        <p className={styles.ProfileNameItemsLinksText}>2239  Hog Camp Road Schaumburg</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.ProfileNameEditItems}>
            <button className={styles.ProfileNameEditItemsEdit}> Edit My Profile</button>
            <div className={styles.ProfileNameEditItemsEditLinks}>
                <button className={styles.ProfileNameEditItemsEditLinksBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2.40356 7.06085L12 11.8584L21.5964 7.06085C21.5608 6.44938 21.2929 5.87463 20.8474 5.45432C20.4018
                    5.03401 19.8125 4.79994 19.2 4.80005H4.79996C4.18747 4.79994 3.5981 5.03401 3.15258 5.45432C2.70705 5.87463 
                    2.43909 6.44938 2.40356 7.06085Z" fill="white"/>
                    <path d="M21.6 9.7417L12 14.5417L2.40002 9.7417V16.8001C2.40002 17.4366 2.65288 18.0471 3.10297 18.4972C3.55306 
                    18.9472 4.1635 19.2001 4.80002 19.2001H19.2C19.8365 19.2001 20.447 18.9472 20.8971 18.4972C21.3472 18.0471 21.6 
                    17.4366 21.6 16.8001V9.7417Z" fill="white"/>
                    </svg>
                </button>
                <button className={styles.ProfileNameEditItemsEditLinksBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.1668 12.3792C15.4951 12.2347 14.9637 12.5466 14.4932 12.8189C14.0114 13.0996 13.0951 
                    13.8429 12.57 13.6526C9.88108 12.5455 7.35213 10.192 6.25739 7.49237C6.06444 6.95598 6.80424 6.03391 
                    7.08283 5.54637C7.35316 5.07443 7.65858 4.53803 7.51928 3.8613C7.3934 3.25317 5.76522 1.18139 5.18947 
                    0.614843C4.80977 0.240613 4.42078 0.0347856 4.02147 0.00152065C2.5202 -0.0629302 0.843516 1.94024 0.549452 
                    2.41947C-0.187255 3.44133 -0.183128 4.80103 0.561834 6.44973C2.35717 10.8781 9.14747 17.5613 13.5925 
                    19.4241C14.4128 19.8077 15.1629 20 15.8366 20C16.496 20 17.0831 19.816 17.5876 19.4511C17.9684 19.2318 
                    20.0536 17.4719 19.9989 15.9302C19.9659 15.5373 19.7606 15.1444 19.3912 14.7639C18.8289 14.1828 16.7704 
                    12.506 16.1668 12.3792Z" fill="white"/>
                </svg>
                </button>
            </div>
            {/* <Link to="#"> Edit My Profile </Link> */}
        </div>
    </div>
    </>
    )
}

export default UserProfileHeader;













 // const [name, setName] = useState["Hello"]
    // const users = [
    //     {id: 1, name: 'John'},
    //     {id: 2, name: 'John Smith'},
    //     {id: 3, name: 'Smith'}
    // ]
    // return (
    //     <>
    //         {users.map((user) => (
    //             <div key={user.id}>
    //                {user.name} 
    //             </div>
    //         ))}
    //     </>
    // )