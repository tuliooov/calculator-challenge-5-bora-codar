import { useCalculatorContext } from '@/contexts/context'
import {
  Calculation,
  Equals,
  Result,
  ResultContainer,
  Root,
} from './index.style'

export const Viewfinder = () => {
  const { numbers } = useCalculatorContext()
  return (
    <Root>
      <Calculation>{numbers.viewfinder}</Calculation>
      <ResultContainer>
        <Equals>=</Equals>
        <Result>{numbers.result.toLocaleString('pt-BR')}</Result>
      </ResultContainer>
    </Root>
  )
}
