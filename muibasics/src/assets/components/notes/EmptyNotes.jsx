import { Typography, Box } from "@mui/material";
import React from "react";
import { LightbulbOutlined as Light } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
const StyledLight = styled(Light)`
  font-size: 150px;
  color: #e6e6e6;
  margin-bottom: 10px;
`;
const StyledText = styled(Typography)`
  font-size: 22px;
  color: #80868b;
`;
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;
const EmptyNotes = () => {
  return (
    <Container>
      <StyledLight></StyledLight>
      <StyledText sx={{ textAlign: { xs: "center" } }}>
        Notes you add appear here
      </StyledText>
    </Container>
  );
};

export default EmptyNotes;
