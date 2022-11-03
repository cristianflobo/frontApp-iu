import React, { useState } from 'react'
import { dataUser } from "../utils/data/dataUser";

const useDetail = ( route) => {
    const [selectScreenQr, setSelectScreenQr] = useState("move");
  
    const accountUser = dataUser.find((item) => item.id === route.params.idUser);
  
    const detailAccountUser = accountUser.cuentas.find((item) => {
      if (
        item.numerocuenta === route.params.numero &&
        item.tipo === route.params.tipo
      ) {
        return item;
      }
    });
  
  return {
    selectScreenQr,
    detailAccountUser,
    setSelectScreenQr,
  }
}

export default useDetail