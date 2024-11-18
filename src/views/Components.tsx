type Props = { className?: string };

const Componenets: React.FC<Props> = (className) => {
  return (
    <div className={`${className ?? ""}`}>
      <h1>Components</h1>
    </div>
  );
};

export default Componenets;
