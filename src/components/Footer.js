import styles from '../css/Footer.module.css';

export default function Footer({copyright}) {
  return (
      <footer>
        <p>&copy; 2025 {copyright}</p>
      </footer>
  );
}