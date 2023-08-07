export interface IconButtonProps {
    icon: JSX.Element;
    onClick?: () => void;
}

export default function IconButton({icon, onClick}: IconButtonProps) {
    return (
        <button className="btn btn-square btn-secondary" onClick={onClick}>
            {icon}
        </button>
    );
    }