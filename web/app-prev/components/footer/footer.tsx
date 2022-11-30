import Image from "next/image";
import { Footer } from "tailwind-react-ui";

import styles from "./footer.module.css";

const Component = () => (
  <Footer className="flex absolute inset-x-0 bottom-0 h-16 border">
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </Footer>
);

export default Component;
