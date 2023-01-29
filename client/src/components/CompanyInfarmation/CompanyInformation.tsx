import React, {FC} from 'react';
import styles from './CompanyInformation.module.scss';
import {CompanyInformation as CompanyInfo} from '../../constants/company-information';
import {PhoneSvg} from "../../assets/phone2";
import {ClockSvg} from "../../assets/clock";
import {Link, NavLink} from "react-router-dom";

const CompanyInformation: FC = () => {
    return <div className={styles.dFlex}>
        <Link className="text-decoration-none" to="/"><i className="fas fa-home" aria-hidden="true"></i>На
            головну</Link>
        <div className={styles.companyInformation}>
            <div className={styles.dFlex}>
                <div className={styles.svg}>
                    <ClockSvg/>
                </div>
                <span className={styles.mw}>Графік роботи: {CompanyInfo.SCHEDULE} </span>
            </div>
            <div className={styles.dFlex}>
                <div className={styles.svg}>
                    <PhoneSvg/>
                </div>
                <span>{CompanyInfo.PHONE_NUMBER_1}</span>
            </div>
        </div>
        <div className={styles.switch}>

            <Link className={styles.txt_dec} to="/login">
                <span className={styles.enter}>Увійти</span></Link>
            <span>|</span>
            <NavLink className={styles.txt_dec} to="/register"><span
                className={styles.register}>Зареєструватися</span></NavLink>
        </div>
    </div>;
};

export default CompanyInformation;
