import React, {useState} from "react";
import styles from './LicenseCertificate.module.css';

const LicenseCertificate = () => {
    const [licenseCertificate, setLicenseCertificate] = useState([
        {
            logo: <image/>,
            role: "Role",
            companyName: "Company Name",
            date: "Date",
        },
        {
            logo: <image/>,
            role: "Role",
            companyName: "Company Name",
            date: "Date",
        },
        {
            logo: <image/>,
            role: "Role",
            companyName: "Company Name",
            date: "Date",
        },
        {
            logo: <image/>,
            role: "Role",
            companyName: "Company Name",
            date: "Date",
        },
])
    return (
        <div className={styles.LicenseCertificateContainer}>
            <div className={styles.LicenseCertificateHeader}>
                <h3 className={styles.LicenseCertificateTitle}>Licenses and certifications</h3>
                <div className={styles.LicenseCertificateHederLinks}>
                    <p className={styles.addButton}>+</p>
                    <p className={styles.addButton}>+</p>
                </div>
            </div>
            <div className={styles.LicenseCertificateBody}>
                {licenseCertificate.map((item, index) => (
                    <div className={styles.LicenseCertificateItem} key={index}>
                        <div className={styles.LicenseCertificateItemLogo}>
                            {item.logo}
                        </div>
                        <div className={styles.LicenseCertificateItemTexts}>
                            <p className={styles.LicenseCertificateItemRole}>{item.role}</p>
                            <p className={styles.LicenseCertificateItemCompanyName}>{item.companyName}</p>
                            <p className={styles.LicenseCertificateItemDate}>{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className={styles.LicenseCertificateSeeMore}> See More</p>
        </div>
    )
}

export default LicenseCertificate;