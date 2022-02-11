import React, { useState } from 'react';
import './calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() { //função principal
  const [num, setNum] = useState(0);
  const [oldnum, setoldNum] = useState(0);
  const [operador, setoperadorNum] = useState(0);

  function inputNum(e) {
    var input = e.target.value; //adicionar valor atribuido a calculadora
    if (num === 0) { //zerar apos add numero.
      setNum(input);
    } else {
      setNum(num + input);
    }
  }
  function clear(e) {
    setNum(0); // deletar o valor atribuido (AC)
  }
  function porcent() { //porcentagem %
    setNum(num / 100);
  }
  function operadoHandler() { // +/-
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }
  function operadorHandler(e) { //operação
    var operacao = e.target.value;
    setoperadorNum(operacao);
    setoldNum(num);
    setNum(0);
  }
  function cacular() { // operações
    if (operador === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operador === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operador === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operador === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return ( //calculadora em visualização
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={2} />
          <h1 className="result">{num}</h1>
          <button onClick={clear}>AC</button> 
          <button onClick={operadoHandler}>+/-</button>
          <button onClick={porcent}>%</button>
          <button className="orange" onClick={operadorHandler} value="/">/</button>
          <button className="gray" onClick={inputNum} value={7}>7</button>
          <button className="gray" onClick={inputNum} value={8}>8</button>
          <button className="gray" onClick={inputNum} value={9}>9</button>
          <button className="orange" onClick={operadorHandler} value="x">X</button>
          <button className="gray" onClick={inputNum} value={4}>4</button>
          <button className="gray" onClick={inputNum} value={5}>5</button>
          <button className="gray" onClick={inputNum} value={6}>6</button>
          <button className="orange" onClick={operadorHandler} value="-">-</button>
          <button className="gray" onClick={inputNum} value={1}>1</button>
          <button className="gray" onClick={inputNum} value={2}>2</button>
          <button className="gray" onClick={inputNum} value={3}>3</button>
          <button className="orange" onClick={operadorHandler} value="+">+</button>
          <button className="gray" onClick={inputNum} value={0}>0</button>
          <button className="gray" onClick={inputNum} value={"."}>.</button>
          <button className="orange" onClick={cacular}>=</button>
        </div>
      </Container>
    </div>
  );
}
