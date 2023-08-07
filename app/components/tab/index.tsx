'use client'

export interface TabProps {
tabs: Tabs[];
onChange?: (index: number) => void;
}

export interface Tabs {
    title: string;
    icon?: JSX.Element;
    active?: boolean;
}

export default function Tab({ tabs, onChange }: TabProps) {

    const handleChange = (index: number) => {
        if (onChange) {
            onChange(index);
        }
    }

    return (
        <div className="tabs tabs-boxed justify-center">
            {tabs.map((tab, index) => (
                <a onClick={() => handleChange(index)} className={`tab ${tab.active ? 'tab-active' : ''}`} key={index}>{tab.icon} &nbsp; {tab.title}</a>
            ))}
        </div>
    )
}