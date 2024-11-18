type Props = { children?: React.ReactNode };

const Sidepanel: React.FC<Props> = ({ children }) => {
  return <aside className="sidepanel">{children}</aside>;
};

export default Sidepanel;
