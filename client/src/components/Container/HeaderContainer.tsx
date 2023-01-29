import React, {FC, useEffect} from "react";
import styles from "./HeaderContainer.module.scss";
import {CartSvg} from "../../assets/cart";
// import CategoryList from "../Category/CategoryList";
// import ColorList from "../Color/ColorList";
// import SearchProduct from "../components/Products/SearchProduct/SearchProduct";
import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {useState} from "react";
import {Link} from "react-router-dom";
//import {useTypedSelector} from '../hooks/useTypedSelector';
//import {useDispatch} from 'react-redux';
//import {removeFromCart} from '../components/actions/action_cart';
import cn from 'classnames';
//import CartButton from "../components/CartButton";
import IUser from "../../types/type";
import * as AuthService from "../../services/auth-service";

const HeaderContainer: FC = () => {
    //const cart = useTypedSelector(state => state.cartinstance);
    const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);
    
    return (
        <div className={styles.container}>
            <div className={styles.logo}>cloThes</div>
            {/*<CategoryList/>*/}
            {/*<ColorList />*/}
            {currentUser ? (
            // <CartButton/>
                <div>Кошик</div>
                ):(
                <div></div>
            )}
        </div>
    )
}

export default HeaderContainer;
