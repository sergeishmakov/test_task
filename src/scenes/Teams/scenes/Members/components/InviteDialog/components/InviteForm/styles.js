import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { Input } from 'final-form-material-ui';

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px 0;
`;

export const StyledCard = styled(Card)`
  margin: 20px 0 20px 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled(Input)`
  margin: 10px 0 10px 0;
`;
