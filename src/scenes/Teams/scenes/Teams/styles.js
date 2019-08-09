import styled from 'styled-components';
import CircularProgressIcon from '@material-ui/core/CircularProgress';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0 30px 0;
`;

export const CircularProgress = styled(CircularProgressIcon)`
  margin: 20px;
`;
