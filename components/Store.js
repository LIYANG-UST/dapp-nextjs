import { useWeb3Contract } from "react-moralis";
import { abi } from "../abi/SimpleStorage";

export default function Store() {
  const { runContractFunction } = useWeb3Contract();

  const options = {
    abi: abi,
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "store",
    params: {
      _favoriteNumber: 88,
    },
  };

  return (
    <div>
      <button
        onClick={() => {
          runContractFunction({ params: options });
        }}
      >
        Store
      </button>
    </div>
  );
}
