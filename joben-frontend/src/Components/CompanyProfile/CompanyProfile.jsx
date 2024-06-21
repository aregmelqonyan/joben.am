import React, { useState } from "react";
import styles from './CompanyProfile.module.css'
import defaultLogo1 from '../../Assets/Frame34.png'
import defaultLogo2 from '../../Assets/Frame 345.png';
import defaultLogo3 from '../../Assets/Frame 34.png';
import defaultLogo4 from '../../Assets/Company1.png';
import defaultLogo5 from '../../Assets/Frame 343.png'; // New default company logo
import defaultLogo6 from '../../Assets/Frame 342.png'; // New default company logo
import Filter from '../Filter/Filter';
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import NavBarCompany from "../../Layout/NavBarCompany";
import NavBarUser from "../../Layout/NavBarUser";


const CompanyProfile = () => {
  const defaultCompaniesToShow = 4;

  const [companies, setCompanies] = useState([
    { logo: defaultLogo1, name: "Google Corporation", email: "example@mail.ru", country: "USA", jobsPosted: 1 },
    { logo: defaultLogo2, name: "Twitter ", email: "example@mail.ru", country: "London", jobsPosted: 2 },
    { logo: defaultLogo3, name: "Meta ", email: "example@mail.ru", country: "Armenia", jobsPosted: 3 },
    { logo: defaultLogo4, name: "Netflix", email: "example@mail.ru", country: "Germany", jobsPosted: 4 },
    { logo: defaultLogo5, name: "Microsoft", email: "example@mail.ru", country: "France", jobsPosted: 5 },
    { logo: defaultLogo6, name: "Twitter", email: "example@mail.ru", country: "Spain", jobsPosted: 6 },
    { logo: defaultLogo2, name: "Google Corporation", email: "example@mail.ru", country: "Italy", jobsPosted: 7 },
    { logo: defaultLogo1, name: "Meta", email: "example@mail.ru", country: "Russia", jobsPosted: 8 },
    { logo: defaultLogo3, name: "Google Corporation", email: "example@mail.ru", country: "Austria", jobsPosted: 9 },
    { logo: defaultLogo5, name: "Microsoft", email: "example@mail.ru", country: "USA", jobsPosted: 10 },
  ]);

  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const company = localStorage.getItem('company');

  const handleShowMoreCompanies = () => {
    setShowAllCompanies(true);
  };

  const handleSearch = (filteredCompanies) => {
    setCompanies(filteredCompanies);
  };

  return (
    <div>
      {(!accessToken && !company) && <NavBar />}
      {(accessToken && !company) && <NavBarUser />}
      {(accessToken && company) && <NavBarCompany />}
        <div>
      <Filter companies={companies} onSearch={handleSearch} />
      <div className={styles.companies_list}>
        
        {companies.slice(0, showAllCompanies ? companies.length : defaultCompaniesToShow).map((company, index) => (
          <div className={styles.companies_card} key={index + 2}>
            <img src={company.logo} alt="" className={styles.companies_profile} />
            <div className={styles.company_name}>
              <div className={styles.company_detail}>
                <h4>{company.name}</h4>
                <h4><a href={`mailto:${company.email}`}>{company.email}</a></h4>
              </div>
            </div>
            <div className={styles.company_label}>
              <h5>{company.country}</h5>
            </div>
            <div className={styles.companies_posted}>
              {company.jobsPosted} Posted Jobs
            </div>
          </div>
        ))}
        {!showAllCompanies && (
          <button className={styles.companies_more} onClick={handleShowMoreCompanies}>More Companies</button>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default CompanyProfile;