import React, { useState } from "react";

const useGenerarQr = () => {
  const [selectedCuenta, setSelectedCuenta] = useState("Ahorro");
  const [selectedMoneda, setSelectedMoneda] = useState("COP");
  const [input, setInput] = useState(0);
  const [generarFinish, setgenerarFinish] = useState(false);
  const [dataQr, setdataQr] = useState("");

  const generate = () => {
    setdataQr(
      `[{cuenta:${selectedCuenta}},{monto:${input}},{moneda:${selectedMoneda}}]`
    );
    setgenerarFinish(!generarFinish);
  };
  return {
    selectedCuenta,
    selectedMoneda,
    generarFinish,
    dataQr,
    input,
    setInput,
    setSelectedCuenta,
    setSelectedMoneda,
    generate,
  };
};

export default useGenerarQr;
