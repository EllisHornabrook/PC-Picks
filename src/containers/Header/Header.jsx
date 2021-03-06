import React from "react";
import { Link } from "@reach/router";
import styles from "./Header.module.scss";
import Nav from "../../components/Nav";

const Header = (props) => {
    const { user, cart } = props;
    
    return (
        <header className={styles.header}>
            <h1>
                <Link to="/">
                    The Gaming Lottery
                </Link>
            </h1>
            <Nav user={user} cart={cart} />
        </header>
    );
};

export default Header;
