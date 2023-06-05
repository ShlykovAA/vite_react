
interface IButtonAge {
    title: string;
    disabled: boolean;
    onClick: () => void;
}

export const ButtonAge = ({ title, disabled, onClick }: IButtonAge) => {
    return (
        <button disabled={disabled} onClick={onClick}>
            {title}
        </button>  
    );
};