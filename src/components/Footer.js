import styles from "../css/Footer.module.css"

export default function Footer({copyright}) {
  return (
      <p className={`${styles['footer-div']}`}>&copy; 2025 {copyright}</p>
  );
}