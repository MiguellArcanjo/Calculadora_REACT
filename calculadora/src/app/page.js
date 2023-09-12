"use client";

import React, { useState } from 'react';
import Button from '@/components/Button';

import { Container, Calc, Input, Grid } from './styles'

export default function Home() {

  const [numberBefore, setNumberBefore] = useState(0);
  const [numberAfter, setNumberAfter] = useState(0);
  const [op, setOp] = useState();

  const Calcu = (e) => {
    let valor = e.target.value;

    if (numberBefore === 0) {
      setNumberBefore(valor)
    } else {
      setNumberBefore(numberBefore + valor)
    }
  }

  const OperatorHandler = (e) => {
    let operador = e.target.value
    setOp(operador)
    setNumberAfter(numberBefore)
    setNumberBefore(0)
  }

  const calcular = () => {
    if (op === '+') {
      let convercao = Number(numberAfter)
      let convercao2 = Number(numberBefore)
      setNumberBefore(convercao + convercao2)
    }

    else if (op === 'x') {
      let convercao = Number(numberAfter)
      let convercao2 = Number(numberBefore)
      setNumberBefore(convercao * convercao2)
    }

    else if (op === '/') {
      let convercao = Number(numberAfter)
      let convercao2 = Number(numberBefore)
      setNumberBefore(convercao / convercao2)
    }
  }

  const BackSpace = () => {
    setNumberBefore(numberBefore - 1)
  }

  const Clear = () => {
    setNumberBefore(0)
  }

  return (
    <Container>
      <Calc>
        <Input 
          type='text'
          value={numberBefore}
        />
        <Grid>
            {[7, 8, 9].map((valor) => (
              <Button key={valor} valor={valor} value={valor} NewNumber={Calcu}/>
            ))}
            <Button valor={'x'} value={'x'} NewNumber={OperatorHandler}/>

            {[4, 5, 6].map((valor) => (
              <Button key={valor} valor={valor} value={valor} NewNumber={Calcu}/>
            ))}

            <Button valor={'+'} value={'+'} NewNumber={OperatorHandler}/>

            {[3, 2, 1].map((valor) => (
              <Button key={valor} valor={valor} value={valor} NewNumber={Calcu}/>
            ))}
   
            <Button valor={'/'} value={'/'} NewNumber={OperatorHandler}/>
            <Button valor={0} value={0} NewNumber={Calcu}/>
            <Button valor={'<-'} value={'<-'} NewNumber={BackSpace}/>
            <Button valor={'C/A'} value={'C/A'} NewNumber={Clear}/>
            <Button valor={'='} value={'='} NewNumber={calcular}/>
        </Grid>
      </Calc>
    </Container>
  )
}
