import React from "react";
import Icons from "../svg/Icons";
import ModalWindow from "./ModalWindow";





export default function ModalEnter({...props}) {

  return(
    <ModalWindow {...props}>
              <div style={{ display: 'flex', justifyContent: 'end' }}>
          <button
            type="button"
            style={{ background: 'none', height: '25px' }}
            onClick={props.close}
          >
            <Icons name="Pluse" width="25" height="25" color="black" />
          </button>
        </div>
              <p>РАБОТАЕТ <b>ВХОД</b></p>
 
    </ModalWindow>


  )
}