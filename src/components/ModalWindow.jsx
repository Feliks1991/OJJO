import React from 'react';
import styled from 'styled-components';
import Icons from '../svg/Icons';

const ModalWindowStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.8);
  z-index: 50;
`;

const ModalWindowContent = styled.div`
  border-radius: 5px;

  background: white;
  max-height: 700px;
`;

export default function ModalWindow({close, children} ) {


  return (
    <ModalWindowStyle onClick={close}>
      <ModalWindowContent onClick={(e)=>{e.stopPropagation()}}>
      <div style={{ display: 'flex', justifyContent: 'end', padding:'10px 10px ' }}>
        <button
          type="button"
          style={{ background: 'none', height: '25px' }}
          onClick={close}
        >
          <Icons name="Pluse" width="25" height="25" color="333333" />
        </button>
      </div>
        <div>{ children }</div>
      </ModalWindowContent>
    </ModalWindowStyle>
  );
}
