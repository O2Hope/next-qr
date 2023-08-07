import Tab from ".";
import Input from "../input";
import LinkTab from "./link-tab";

export interface TabContentProps {
    tabName: "link" | "wifi" | "location" | "phone" | "email" | undefined;
}

export default function TabContent({ tabName }: TabContentProps) {

    const tabContent = {
        "link": <LinkTab/>,
        "wifi": <Input placeholder="Enter wifi name" />,
        "location": <Input placeholder="Enter location" />,
        "phone": <Input placeholder="Enter phone number" />,
        "email": <Input placeholder="Enter email" />,
    };

  return tabName && tabContent[tabName];
}