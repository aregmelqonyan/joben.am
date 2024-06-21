import React, {useState} from "react";
import styles from './Language.module.css'
import AddLanguage from '../AddLanguage/AddLanguage';

const Language = ( ) => { 
    // const [language, setLanguage] = useState([]);
    const [languageButton, setLanguageButton] = useState(true);
    const toggleComponents = () => {
        setLanguageButton(!languageButton);
    }
    return (
        <>
        {languageButton ? (
            <div className={styles.LanguageCotainer}>
            <div className={styles.LanguageHeader}>
                <h3 className={styles.LanguageTitle}>Language</h3>
                <div className={styles.LanguageHederLinks}>
                    <button className={styles.addButton} onClick={toggleComponents}>+</button>
                    <p className={styles.addButton}>+</p>
                </div>
            </div> 
            <div className={styles.AddLanguageItems} onClick={toggleComponents}>
                <div className={styles.AddLanguageItemsItem}>
                    <div className={styles.AddLanguageItemsItemPlus}>+</div>
                    <div className={styles.AddLanguageItemsItemText}>Add Language</div>
                </div>
            </div>
            <p className={styles.seeMore}>See More </p>
        </div>
        ) : <AddLanguage/>}
        </>
    )
}

export default Language;