
type LandingProps = {
    className?: string;
};

const Landing: React.FC<LandingProps> = (className) => {
    return (
        <div className={`${className ??  ""}`}>
            <h1>Landing</h1>
        </div>
    );
}

export default Landing;