import React from "react";
import { ROUTES } from "../../routes/const";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.scss"


export const Layout: React.FC = () => {
    const routesConfig = Object.entries(ROUTES);
    return (
        <>
            <header className={styles.layout}>
                { routesConfig.map(([key, value], index) => {
                    return key === "user" ? null : (
                        <div key={key}>
                            <NavLink to={value}>
                                {key.toUpperCase()}
                            </NavLink>
                            { index < routesConfig.length - 1 ? (
                                <span className={styles.divider}></span>
                            ) : null }
                        </div>
                    );
                })}
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    )
}