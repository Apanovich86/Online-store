import React from 'react';
import styles from '../components/CompanyInfarmation/CompanyInformation.module.scss';
import { PhoneSvg} from '../assets/phone2';
import {ClockSvg} from '../assets/clock';
import { CompanyInformation as CompanyInfo } from '../constants/company-information';

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className={styles.dFlex}>
                <div>
            <div className="footer-logo">cloThes</div>
            2022 cloThes
                </div>
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
        </div>
    );
};

export default Footer;
