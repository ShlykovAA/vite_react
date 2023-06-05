import React, { useEffect } from "react";
import { TabItem, ITabItem } from "./tab-item"
import styles from "./tabs-lesson.module.scss"

export interface ITabConfig {
    id: string;
    title: ITabItem["title"];
    content: React.ReactNode;
}

interface ITabsLesson {
    defaultActive?: ITabConfig["id"];
    tabs: ITabConfig[];
}

export const TabsLesson = ({ defaultActive, tabs }:ITabsLesson) => {
    const [activeTab, setActiveTab] = React.useState(defaultActive);
    const [activeContent, setActiveContent] = React.useState<React.ReactNode>();

    useEffect(()=>{
        const tab = tabs.find((tab) => tab.id === activeTab)
        setActiveContent(tab?.content || null)
    },[activeTab, tabs])

    return (
        <div>
            <div className={styles["tab-container"]}>
                {tabs.map((tab)=> (
                    <TabItem key={tab.id} id={tab.id} active={tab.id === activeTab} title={tab.title} onClick={()=>{
                        setActiveTab(tab.id)
                    }} />
                ))}
            </div>
            {activeContent}
        </div>
    )
}