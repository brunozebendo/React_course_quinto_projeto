/**Relembrando aqui que sempre que for trabalhar com module.css, é
 * necessário essa importação, com o nome que quiser, mas, por padrão,
 * classes que depois é passado como classes.onomedoitemnoCSS
 */

import React from "react";
import classes from './Button.module.css'

const Button = (props) => {
    return <button className={classes.button}
    type={props.type || 'button'}
    onClick={props.onClick}>

    {props.children}

    </button>
}

export default Button;