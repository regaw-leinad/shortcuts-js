/**
 * @typedef {('+'|'-'|'×'|'÷'|'Modulus'|'x^2'|'x^3'|'x^y'|'e^x'|'10^x'|'ln(x)'|'log(x)'|'√x'|'∛x'|'x!'|'sin(x)'|'cos(x)'|'tan(x)'|'abs(x)')} WFMathOperation
 */
type WFMathOperation = (
  '+'
  | '-'
  | '×'
  | '÷'
  | 'Modulus'
  | 'x^2'
  | 'x^3'
  | 'x^y'
  | 'e^x'
  | '10^x'
  | 'ln(x)'
  | 'log(x)'
  | '√x'
  | '∛x'
  | 'x!'
  | 'sin(x)'
  | 'cos(x)'
  | 'tan(x)'
  | 'abs(x)'
);

export default WFMathOperation;