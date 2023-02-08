import { Typography, Box } from "@mui/material";
import React from "react";
import { LightbulbOutlined as Light } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { DeleteOutlineOutlined as Delete } from "@mui/icons-material";
const StyledDelete = styled(Delete)`
  font-size: 150px;
  // width: 100%
  color: #e6e6e6;
  margin-bottom: 10px;
  // margin-top: 30px;
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
const EmptyDeleteNotes = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <StyledText sx={{ textAlign: { xs: "center" } }}>
        Notes in Trash are deleted after 7 days
      </StyledText>
      <Container>
        <StyledDelete></StyledDelete>
        <StyledText sx={{ textAlign: { xs: "center" } }}>
          No notes in Trash
        </StyledText>
      </Container>
    </Box>
  );
};

export default EmptyDeleteNotes;
