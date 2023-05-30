import React from "react"

import { TabsSwitch } from "../../components/tabs-switch"


export const Tabs = () => {
    const [currentStatus, setCurrentStatus] = React.useState<string>("Tab1")
    return (
        <>
            <div>
                <button type="button" onClick={()=>{
                    setCurrentStatus("Tab1")
                }}>
                    Tab 1
                </button>
                <button type="button" onClick={()=>{
                    setCurrentStatus("Tab2")
                }}>
                    Tab 2
                </button>
                <button type="button" onClick={()=>{
                    setCurrentStatus("Tab3")
                }}>
                    Tab 3
                </button>
            </div>
            <div style={{paddingTop: "20px" }}>
                <TabsSwitch value={currentStatus}/>
            </div>
        </>
    ) 
}