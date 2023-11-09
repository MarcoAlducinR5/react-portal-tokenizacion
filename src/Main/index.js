import React from 'react';
import { Pago } from './Pago';
import { Confirmacion } from './Confirmacion';

function Main() {
  
  const [estadoPago, setEstadoPago] = React.useState(true);

  return (
    <React.Fragment>
      { estadoPago ? <Confirmacion /> : <Pago /> }
    </React.Fragment>
  );

}

export {Main};
  