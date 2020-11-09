import { Row, Col, Alert } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  text-align: center;
  margin-top: 200px;
`;

export const Warning = ({
  warningHeader,
  warningText,
}: {
  warningHeader: string;
  warningText: string;
}) => (
  <Row>
    <StyledCol span={12} offset={6}>
      <Alert
        message={warningHeader || 'Uh oh'}
        description={warningText || 'It seem there are no recipes to be be found'}
        type="warning"
      />
    </StyledCol>
  </Row>
);