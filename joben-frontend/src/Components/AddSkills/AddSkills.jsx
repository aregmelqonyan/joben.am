import React, {useState} from "react";
import styles from './AddSkills.module.css';
import Skills from '../Skills';

const AddSkills = () => {
    const [suggestionSkills, setSuggestionSkills] = useState([
        {
            plus: "+",
            skill: "UI & UX",
        },
        {
            plus: "+",
            skill: "UI Graphics",
        },
        {
            plus: "+",
            skill: "User Experience",
        },
        {
            plus: "+",
            skill: "Web Design",
        },
        {
            plus: "+",
            skill: "User Interface Design",
        },
        {
            plus: "+",
            skill: "UI & UX",
        },
        
    ])
    const[SkillsButton, setSkillsButton] = useState(true);
    const toggleComponents = () => {
        setSkillsButton(!SkillsButton);
    }

    return (
        <>
        {SkillsButton ? (
            <div className={styles.AddSkillsContainer}>
                <div className={styles.AddSkillsHeader}>
                    <p className={styles.AddSkillsTitle}>Add Your Skills</p>
                </div>
                <div className={styles.AddSkillsContainerItems}>
                    <div className={styles.AddSkillsDescription}>
                        <h3 className={styles.AddSkillsDescriptionTitle}>Your Skills</h3>
                        <input className={styles.AddSkillsDescriptionInput} type="text"/>
                         {/* write searching function */}
                    </div>
                    <div className={styles.AddSkillsSuggestion}>
                        <p className={styles.AddSkillsSuggestionTitle}>Suggested Skills</p>
                        <div className={styles.AddSkillsSuggestionTypesItems}> 
                        {suggestionSkills.map ((suggestionSkills, index) => (
                            <div className={styles.AddSkillsSuggestionTypesContainer}  key ={index}>
                                <div className={styles.AddSkillsSuggestionTypesContainerPlus}>{suggestionSkills.plus}</div>
                                <div className={styles.AddSkillsSuggestionTypesContainerText}>{suggestionSkills.skill}</div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className={styles.AddSkillsButtons}>
                        <button className={styles.AddSkillsButtonCancel} onClick={toggleComponents}>Cancel</button>
                        <button className={styles.AddSkillsButtonSave}>Save</button>
                    </div>
                </div>
            </div>
        ) : <Skills/>}
        </>
    );
}

export default AddSkills;