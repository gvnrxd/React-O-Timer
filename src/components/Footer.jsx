import styles from "./Footer.module.css";
import coffeeIcon from "../assets/coffee.svg";
function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <span>&copy; {new Date().getFullYear()} Built using React + Vite</span>
        <span>Made with: 💻 + ☕</span>
        <span>
          Donate Here:
          <a
            href="https://buymeacoffee.com/gvnrxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.icon}
              src={coffeeIcon}
              alt="Buy me a coffeee"
            />
          </a>
        </span>
        <span>
          Link to GitHub:{" "}
          <a
            href="https://github.com/gvnxr"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GVNRXD
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;
