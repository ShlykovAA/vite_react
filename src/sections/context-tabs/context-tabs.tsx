import React from "react"
import { TabsLesson, ITabConfig } from "../../components/tabs-lesson/tabs-lesson"
import { ControlAge } from "../control"
import { Timer } from "../timer"
import { AgeContext } from "../../providers/age"
import { RenderProps } from "../../components/render-props"

interface IContextData {
    children: React.ReactNode;
}

const ContextData = ({ children }: IContextData) => {
    const { age } = React.useContext(AgeContext)
    return (
        <div>
            {children}
            <p>context data: {age}</p>
        </div>
    )
}

const tabsConfig: ITabConfig[] = [
    {id: "1", title: "Timer", content: (
        <ContextData>
            <Timer />
        </ContextData>
    )},
    {id: "2", title: "ControlAge", content: (
        <ContextData>
            <ControlAge />
        </ContextData>
    )},
    {id: "3", title: "Empty", content: <p>There is a empty</p>},
    {id: "4", title: "Render Props", content: (
        <RenderProps />
    )},
]

export const ContextTabs = () => {
    return <TabsLesson tabs={tabsConfig} defaultActive="1" />
}