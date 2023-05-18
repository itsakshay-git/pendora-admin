import React from 'react'
import styles from './Nav.module.css'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutUser());
    navigate("/login")
  };

  return (
    <nav className={styles.nav}>
        <img src={require("../../assets/panterra-logo (1).png")} alt="logo" />
        <div className={styles.searchbar}>
        <input type='text' placeholder='Search Here'/>
        <svg xmlns="http://www.w3.org/2000/svg" height="15" fill='green' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </div>
        <div className={styles.profile}>
        <img src={require("../../assets/20229172_105017353498506_733473355236949047_n.jpg")} alt="logo" />
        <p>name</p>
        <button onClick={(e) => handleLogout(e)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="15" fill='white' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
        </button>
        </div>
    </nav>
  )
}

export default Nav