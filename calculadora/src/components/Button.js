import React from 'react';

import PropTypes from 'prop-types';

import { Botao } from './styles';


function Button({valor, value, NewNumber}) {

    

  return (
    <div>
        <Botao 
            onClick={NewNumber}
            value={value}
        >{valor}</Botao>
    </div>
  )
}

// Button.defaultProps = {
//     clear: undefined,
// }

Button.propTypes = {
    valor: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    NewNumber: PropTypes.func,
}

export default Button;