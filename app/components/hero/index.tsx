'use client'

import { useState } from "react";
import Tab from "../tab";
import {MdOutlineWifiPassword, MdLink, MdPhoneEnabled, MdEmail, MdLocationOn} from "react-icons/md";
import TabContent from "../tab/tab-content";

export interface HeroProps {
    title: string;
    button: string;
}

export interface Data {
    title: "link" | "wifi" | "location" | "phone" | "email";
    active: boolean;
    icon: JSX.Element;
}

const data: Data[] = [
    {title: "link", active: true,  icon: <MdLink />},
    // {title: "wifi" , active: false, icon: <MdOutlineWifiPassword />},
    // {title: "location", active: false, icon: <MdLocationOn />},
    // {title: "phone", active:false,  icon: <MdPhoneEnabled />},
    // {title: "email", active: false, icon: <MdEmail /> },
];


export default function Hero({title, button}: HeroProps) {
    const [tabs, setTabs] = useState<Data[]>(data);

    const onChange = (index: number) => {
        const newTabs = tabs.map((tab, i) => {
            if (i === index) {
                return {...tab, active: true};
            }
            return {...tab, active: false};
        });
        setTabs(newTabs);
    };
    
    return (
        <div className="hero min-h-[calc(100vh-56px)] bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md flex flex-col gap-6 items-center">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <Tab tabs={tabs} onChange={onChange} />
                    <TabContent tabName={tabs.find((tab) => tab.active)?.title} />
                </div>
            </div>
        </div>
    );
}