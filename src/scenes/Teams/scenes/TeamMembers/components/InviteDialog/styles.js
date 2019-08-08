import styled from 'styled-components';
import { CheckCircle, Error as ErrorIconMui } from '@material-ui/icons';
import CircularProgressMui from '@material-ui/core/CircularProgress';

import { Scarlet, Malachite } from '../../../../../../variables/colors';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorIcon = styled(ErrorIconMui)`
  font-size: 50pt;
  margin: 20px;
  color: ${Scarlet};
`;

export const CheckIcon = styled(CheckCircle)`
  font-size: 50pt;
  margin: 20px;
  color: ${Malachite};
`;

export const CircularProgress = styled(CircularProgressMui)`
  margin: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
