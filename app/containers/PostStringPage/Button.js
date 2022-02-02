import styled from 'styled-components';

const Button = styled.button(props => ({
  display: 'inline-block',
  'box-sizing': 'border-box',
  padding: '0.25em 2em',
  'background-color': props.color,
  'border-radius': '4px',
  '-webkit-font-smoothing': 'antialiased',
  '-webkit-touch-callout': 'none',
  border: `2px solid ${props.color}`,
  color: 'white',
  margin: '0.25em',
  'font-weight': 'bold',
  'font-size': '16px',

  '&:active': {
    'background-color': '#43cc7a',
    border: '2px solid #43cc7a',
    transform: 'translateY(2px)',
  },
}));

export default Button;
