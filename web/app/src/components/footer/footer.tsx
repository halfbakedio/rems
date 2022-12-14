import styles from "./footer.module.css";

const Component = () => (
  <div className="flex absolute inset-x-0 bottom-0 h-16 border">
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <span className={styles.logo}>
        <img src="/vercel.svg" alt="Vercel Logo" />
      </span>
    </a>
  </div>
);

export default Component;
