export default function Link({page, item, onSetPage, defultColor, activeColor, children}) {
    return (
        <li onClick={() => onSetPage && onSetPage(item.label)}
            className={`hover:text-[#777] ${item.label.toLocaleLowerCase() === page ? activeColor : {defultColor}}`} 
            key={item.label}
        >
            <a target={item.target && "_blank"} href={item.href}>{children}</a>
        </li>
    );
}