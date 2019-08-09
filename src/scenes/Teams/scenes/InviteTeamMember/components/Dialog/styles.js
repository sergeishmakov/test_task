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
  margin: 0 0 20px 0;
  color: ${Scarlet};
`;

export const CheckIcon = styled(CheckCircle)`
  font-size: 50pt;
  margin: 0 0 20px 0;
  color: ${Malachite};
`;

export const CircularProgress = styled(CircularProgressMui)`
  margin: 0 0 20px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
