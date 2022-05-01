import styles from "../styles/Home.module.css";

import { useWeb3Contract } from "react-moralis";

import { abi } from "../abi/SimpleStorage";

export default function Home() {
  const { runContractFunction } = useWeb3Contract({
    abi: abi,
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "store",
    params: {
      _favoriteNumber: 88,
    },
  });

  return (
    <div className={styles.container}>
      <h1>Hello from index</h1>
      <button
        onClick={() => {
          console.log("good");
          runContractFunction();
        }}
      >
        Store
      </button>
    </div>
  );
}
