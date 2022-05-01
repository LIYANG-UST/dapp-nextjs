import styles from "../styles/Home.module.css";

import { useWeb3Contract } from "react-moralis";



import Read from "../components/Read";
import Store from "../components/Store";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello from index</h1>

      <Read />
      <Store />
    </div>
  );
}
