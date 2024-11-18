
type NotFoundProps = {
    className?: string;
};

const NotFound: React.FC<NotFoundProps> = (className) => {
    return (
        <div className={`${className ?? ""}`}>
            <h1>Not Found 404</h1>
        </div>
    );
}

export default NotFound;