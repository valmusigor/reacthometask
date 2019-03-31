import styled from 'styled-components';

const App= styled.div`
  background: linear-gradient(135deg, #959595 0%,#0d0d0d 46%,#010101 50%,#0a0a0a 53%,#4e4e4e 76%,#383838 87%,#1b1b1b 100%);
	max-width:100%;
	min-height:100vh;
	display:grid;
	grid-template-columns: 1fr;
	grid-template-rows:70px auto auto 50px;
	grid-template-areas:
	"header"
	"main"
	"slayder"
	"footer";
	color:white;

`;
export default App;
