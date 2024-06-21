import React, { useState } from 'react';
import styles from './AddEducation.module.css';
import Education from '../Education/Education';
import axios from 'axios'

const AddEducation = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [cancelButton, setCancelButton] = useState(true);
    const [formData, setFormData] = useState({
        place: '',
        field_of_study: '',
        description: '',
        start_date: '',
        end_date: '',
        currently_studying: false
    });

    const toggleComponents = () => {
        setCancelButton(!cancelButton);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = { ...formData };
        if (formData.currently_studying) {
            delete dataToSend.end_date;
        }
        
        try {
            const response = await axios.post('http://localhost:8000/user/education', dataToSend, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to save education');
            }
            
            // Handle success, maybe switch to the education list view
            toggleComponents();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            {cancelButton ? (
                <div className={styles.addEducationContainer}>
                    <h1 className={styles.addEducationTitle}>
                        Add Your Education
                    </h1>
                    <form onSubmit={handleSubmit}className={styles.addEducationItemsContainer}>
                        <div className={styles.addEducationItems}>
                            <div className={styles.addEducationItemsTitleContainer}>
                                <p className={styles.addEducationItemsTitle}>Institution Name</p>
                                <input 
                                    className={styles.addEducationItemsTitleInput} 
                                    type="text" 
                                    name="place"
                                    value={formData.place}
                                    onChange={handleChange}
                                    placeholder="Ex: Harvard University" 
                                />
                            </div>
                            <div className={styles.addEducationItemsCompanyContainer}>
                                <p className={styles.addEducationItemsCompany}>Field of Study</p>
                                <input 
                                    className={styles.addEducationItemsCompanyInput} 
                                    type="text" 
                                    name="field_of_study"
                                    value={formData.field_of_study}
                                    onChange={handleChange}
                                    placeholder="Ex: Computer Science" 
                                />
                            </div>
                            <div className={styles.addEducationItemsDatesContainer}> 
                                <div className={styles.addEducationItemsDatesContainerItems}>
                                    <div className={styles.addEducationItemsStartDateContainer}>
                                        <p className={styles.addEducationItemsStartDateTitle}>Start Date</p>
                                        <input 
                                            type="date" 
                                            className={styles.addEducationItemsStartDateInput}
                                            name="start_date"
                                            value={formData.start_date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {!formData.currently_studying && (
                                        <div className={styles.addEducationItemsEndDateContainer}>
                                            <p className={styles.addEducationItemsEndDateTitle}>End Date</p>
                                            <input 
                                                type="date" 
                                                className={styles.addEducationItemsEndDateInput}
                                                name="end_date"
                                                value={formData.end_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className={styles.addEducationItemsCheckboxContainer}>
                                    <input 
                                        type="checkbox" 
                                        id="currently_studying" 
                                        name="currently_studying" 
                                        checked={formData.currently_studying}
                                        onChange={handleChange} 
                                    />
                                    <label htmlFor="currently_studying" className={styles.addEducationItemsCheckbox}>
                                        I am currently studying here
                                    </label>
                                </div>
                            </div>
                            <div className={styles.addEducationItemsDescriptionContainer}>
                                <p className={styles.addEducationItemsDescriptionTitle}>Description</p>
                                <textarea 
                                    className={styles.addEducationDescriptionItemsInput}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.addEducationItemsButtons}>
                                <button 
                                    type="button" 
                                    className={styles.addEducationItemsButtonsCancel} 
                                    onClick={toggleComponents}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className={styles.addEducationItemsButtonsSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                    {toggleComponents}
                </div>
            ) : (
                <Education />
            )}
        </>
    );
};

export default AddEducation;
