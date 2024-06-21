// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styles from './Experience.module.css';
// import AddExperience from '../AddExperience';
// import logo from '../../Assets/linkedin.png';

// const Experience = () => {
//     const [experience, setExperience] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [addExperienceButton, setAddExperienceButton] = useState(true);
//     const token = localStorage.getItem('accessToken');
//     const refresh = localStorage.getItem('refreshToken');

//     useEffect(() => {
//         const fetchExperience = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/user/experience', {
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 });
//                 setExperience(response.data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchExperience();
//     }, []);

//     const toggleComponents = () => {
//         setAddExperienceButton(!addExperienceButton);
//     };

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
//     };

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <>
//             {addExperienceButton ? (
//                 <div className={styles.experienceContainer}>
//                     <div className={styles.experienceHeader}>
//                         <h3 className={styles.experienceHeaderTitle}>Experience</h3>
//                         <div className={styles.experienceButtons}>
//                             <button className={styles.addButton} onClick={toggleComponents}>+</button>
//                             <p className={styles.editButton}>+</p>
//                         </div>
//                     </div>
//                     <div className={styles.ExperienceList}>
//                         {experience.map((exp, index) => (
//                             <div className={styles.experienceItem} key={index}>
//                                 <div className={styles.experienceInfo}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="66" height="55" viewBox="0 0 66 55" fill="none">
//                                         <rect width="66" height="55" rx="6.36585" fill="url(#pattern0_4_180)" />
//                                         <defs>
//                                             <pattern id="pattern0_4_180" patternContentUnits="objectBoundingBox" width="1" height="1">
//                                                 <use xlinkHref="#image0_4_180" transform="matrix(0.00454545 0 0 0.00545455 0 0.0798686)" />
//                                             </pattern>
//                                             <image id="image0_4_180" width="220" height="220" src={logo} />
//                                         </defs>
//                                     </svg>
//                                     <div className={styles.experienceDetails}>
//                                 <div className={styles.experienceDetailsTitle}>
//                                     <h4>{exp.profession} <span className={styles.Ellipsis}>.</span><span className={styles.ExperienceJobType}>{exp.job_type}</span></h4>
//                                     {/* <p className={styles.ExperienceJobType}>{exp.job_type}</p> */}
//                                 </div>
//                                 <div className={styles.ExperienceTexts}>
//                                     <p className={styles.ExperienceTextsCompany}>{exp.company}</p>
//                                     <p className={styles.ExperienceTextsLocation}>Location {exp.location} </p>
//                                     <p className={styles.EducationTextsDate}>{formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : 'present'}</p>
//                                     <p style={{color: "#868686"}}>{exp.period}</p>
//                                     <p style={{color: "#868686"}}>{exp.duration}</p>
//                                 </div>
//                             </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ) : (
//                 <AddExperience toggleComponents={toggleComponents} />
//             )}
//         </>
//     );
// };

// export default Experience;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Experience.module.css';
import AddExperience from '../AddExperience';
import logo from '../../Assets/linkedin.png';

const Experience = () => {
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addExperienceButton, setAddExperienceButton] = useState(true);
    const token = localStorage.getItem('accessToken');
    const refresh = localStorage.getItem('refreshToken');

    const refreshToken = async () => {
        try {
            const response = await axios.post('http://localhost:8000/refresh_token', {
                refresh_token: refresh,
            });
            localStorage.setItem('accessToken', response.data.access_token);
            return response.data.access_token;
        } catch (error) {
            console.error('Failed to refresh token', error);
            // Handle token refresh failure, e.g., log out the user
            return null;
        }
    };

    const fetchExperience = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user/experience', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setExperience(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                const newToken = await refreshToken();
                if (newToken) {
                    try {
                        const response = await axios.get('http://localhost:8000/user/experience', {
                            headers: {
                                'Authorization': `Bearer ${newToken}`
                            }
                        });
                        setExperience(response.data);
                    } catch (error) {
                        setError(error.message);
                    }
                } else {
                    setError('Unable to refresh token. Please log in again.');
                }
            } else {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExperience();
    }, []);

    const toggleComponents = () => {
        setAddExperienceButton(!addExperienceButton);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            {addExperienceButton ? (
                <div className={styles.experienceContainer}>
                    <div className={styles.experienceHeader}>
                        <h3 className={styles.experienceHeaderTitle}>Experience</h3>
                        <div className={styles.experienceButtons}>
                            <button className={styles.addButton} onClick={toggleComponents}>+</button>
                            <p className={styles.editButton}>+</p>
                        </div>
                    </div>
                    <div className={styles.ExperienceList}>
                        {experience.map((exp, index) => (
                            <div className={styles.experienceItem} key={index}>
                                <div className={styles.experienceInfo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="66" height="55" viewBox="0 0 66 55" fill="none">
                                        <rect width="66" height="55" rx="6.36585" fill="url(#pattern0_4_180)" />
                                        <defs>
                                            <pattern id="pattern0_4_180" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_4_180" transform="matrix(0.00454545 0 0 0.00545455 0 0.0798686)" />
                                            </pattern>
                                            <image id="image0_4_180" width="220" height="220" src={logo} />
                                        </defs>
                                    </svg>
                                    <div className={styles.experienceDetails}>
                                        <div className={styles.experienceDetailsTitle}>
                                            <h4>{exp.profession} <span className={styles.Ellipsis}>.</span><span className={styles.ExperienceJobType}>{exp.job_type}</span></h4>
                                        </div>
                                        <div className={styles.ExperienceTexts}>
                                            <p className={styles.ExperienceTextsCompany}>{exp.company}</p>
                                            <p className={styles.ExperienceTextsLocation}>Location {exp.location} </p>
                                            <p className={styles.EducationTextsDate}>{formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : 'present'}</p>
                                            <p style={{color: "#868686"}}>{exp.period}</p>
                                            <p style={{color: "#868686"}}>{exp.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <AddExperience toggleComponents={toggleComponents} />
            )}
        </>
    );
};

export default Experience;
