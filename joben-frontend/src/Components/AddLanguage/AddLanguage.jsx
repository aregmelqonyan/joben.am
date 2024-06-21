import React, {useState} from "react";
import styles from './AddLanguage.module.css';
import Language from '../Language/Language';


const AddLanguage = () => {
    const [languageTypes, setLanguageTypes] = useState([
        "Please select", "Elementary proficiency", "Limited working proficiency",
        "Professional working proficiency", "Full Professional proficiency", "Native or bilingual proficiency"
    ]);
    const [addLanguageButton, setAddLanguageButton] = useState(true);
    const toggleComponents = () => {
        setAddLanguageButton(!addLanguageButton);
    }
    return (
        <>
            {addLanguageButton ? (
                <div className={styles.AddLanguageContainer}>
                    <div className={styles.AddLanguageHeader}>
                        <p className={styles.AddLanguageTitle}>Language</p>
                    </div>
                    <div className={styles.AddLanguageItemsContainer}>
                        <div className={styles.AddLanguageItemsContainerLanguageInput}>
                            <h3 className={styles.AddLanguageItemsContainerTitle}>Language</h3>
                            <input className={styles.AddLanguageInput} type="text"/>
                        </div>
                        <div className={styles.AddLanguageItemsContainerTypes}>
                            <h3 className={styles.AddLanguageItemsContainerTypesTitle}>Proficiency</h3>
                            <div className={styles.AddLanguageItemsContainerTypesItems}>
                            {languageTypes.map((languageTypes, index) => (
                                <div className={styles.AddLanguageItemsContainerTypesContainer} key={index}>
                                    <input className={styles.AddLanguageItemsContainerTypesItemsInput} type="checkbox"/>
                                    <p className={styles.AddLanguageItemsContainerTypesItemsText}>{languageTypes}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className={styles.AddLanguageButtons}>
                            <button className={styles.AddLanguageButtonCancel} onClick={toggleComponents}>Cancel</button>
                            <button className={styles.AddLanguageButtonSave}>Save</button>
                        </div>
                    </div>
                </div>
            ) : <Language/> }

        
        </>
    )
}
export default AddLanguage;