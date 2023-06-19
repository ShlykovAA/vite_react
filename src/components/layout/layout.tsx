import { ReactNode } from "react";
import { ROUTES } from "../../routes/const"
import { NavLink } from "react-router-dom";
import styles from "./layout.module.scss"

interface ILayout {
    children: ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
    const routesConfig = Object.values(ROUTES);
    return (
        <div>
            <div>
                { routesConfig.map(([key, value]) => {
                    return key === "user" ? null : (
                        <NavLink to={value} key={key}>
                            {key.toUpperCase()}
                        </NavLink>
                    );
                })}
            </div>
            {children}
        </div>
    )
}