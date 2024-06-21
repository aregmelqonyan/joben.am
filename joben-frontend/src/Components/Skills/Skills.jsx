import React, {useState} from "react"
import styles from './Skills.module.css'
import AddSkills from '../AddSkills/AddSkills'
const Skills = () => {
    const[addSkillsButton, setAddSkillsButton] = useState(true);
    const toggleComponents = () => {
        setAddSkillsButton(!addSkillsButton);
    }
    return (
        <>
        {addSkillsButton ? (
            <div className={styles.SkillsCotainer}>
                <div className={styles.SkillsHeader}>
                    <h3 className={styles.SkillsTitle}>Skills</h3>
                    <div className={styles.SkillsHederLinks}>
                        <button className={styles.addButton} onClick={toggleComponents}>+</button>
                        <p className={styles.addButton}>+</p>
                    </div>
                </div> 
                <p className={styles.SkillsParagraph}>We recommend adding your best skills here</p>
                <div className={styles.AddSkillsItems} onClick={toggleComponents}>
                    <div className={styles.AddSkillsItemsItem}>
                        <div className={styles.AddSkillsItemsItemPlus}>+</div>
                        <div className={styles.AddSkillsItemsItemText}>Add Skill</div>
                    </div>
                </div>
                <p className={styles.seeMore}>See More </p>
            </div>
        ) : <AddSkills/>}
        </>
    )
}

export default Skills;