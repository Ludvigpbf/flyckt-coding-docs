
type HeaderProps = {className?: string};

const Header: React.FC<HeaderProps> = (className) => {
    return (
        <div className={`header${className ? ` ${className}` : ""}`}>
            <p>Header</p>
            
        </div>
    );
}

export default Header;