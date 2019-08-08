import styled from 'styled-components';
import { CheckCircle } from '@material-ui/icons';
import ErrorIcon from '@material-ui/icons/Error';

import { Scarlet, Malachite } from '../../../../../../variables/colors';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCheckCircle = styled(ErrorIcon)`
  font-size: 50pt;
  color: ${Scarlet};
`;

export const StyledError = styled(CheckCircle)`
  font-size: 50pt;
  color: ${Malachite};
`;

export const Center = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;
  flex-ddirection: columns;
  justify-content: center;
  align-items: center;
`;
