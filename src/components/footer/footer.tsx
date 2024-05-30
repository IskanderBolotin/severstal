import s from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        {`© Компания, ${new Date().getFullYear()}`}
      </div>
    </footer>
  )
}
export default Footer;