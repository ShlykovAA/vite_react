import { ControlAge } from "../../sections/control";
import { Timer } from "../../sections/timer";
import "./switch.css"

interface ISwitch {
    value: string;
}

export const TabsSwitch = ({ value }: ISwitch) => {
    if (value === "Tab1") {
        return (
            <ControlAge />
        )
    } else if (value === "Tab2") {
        return (
            <button type="button" className="btn">Click me</button>
        )
    } else {
        return (
            <Timer />
        )
    }

};