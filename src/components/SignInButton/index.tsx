import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const isUserLoggerIn = true;

  return isUserLoggerIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" /> Lucas Praxedes
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" /> Sign in with Github
    </button>
  );
}
