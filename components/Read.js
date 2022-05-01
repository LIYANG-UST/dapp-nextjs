import { useWeb3Contract } from "react-moralis";
import { useState } from "react";
import { abi } from "../abi/SimpleStorage";

export default function Read() {
  const [value, setValue] = useState("init");

  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

  const options = {
    abi: abi,
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "retrieve",
  };

  //   const readValue = async () => {
  //     console.log("reading value");
  //     const returnvalue = await runContractFunction();
  //     setvalue(returnvalue);
  //   };

  const showData = () => {
    if (data != null) {
      setValue(data.toString());
    } else setValue("null");
  };

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      <button
        onClick={() => {
          runContractFunction({ params: options }).then(() => {
            showData();
          });
        }}
      >
        Read
      </button>
      <div>{value}</div>
    </div>
  );
}
