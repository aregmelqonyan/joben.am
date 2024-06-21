import Skills from '../Skills';
import Language from '../Language';
import Experience from '../Experience';
import UserProfileHeader from '../UserProfileHeader';
import LicenseCertificate from '../LicenseCertificate';
import Education from '../Education';
import NavBarUser from '../../Layout/NavBarUser';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Profile() {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
  
    if (!token) {
        navigate('/login')
    }
  }, [token, navigate]);

  return (
    <>
      <NavBarUser />
      <UserProfileHeader/>
      <Experience/>
      <Education/>
      <LicenseCertificate/> 
      <Skills/>
      <Language/>
    </> 
  )
}

export default Profile;
