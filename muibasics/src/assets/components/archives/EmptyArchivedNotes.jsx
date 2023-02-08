import { Typography, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { ArchiveOutlined as Archive } from "@mui/icons-material";
const StyledArchive = styled(Archive)`
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
const EmptyArchivedNotes = () => {
  return (
    <Container>
      <StyledArchive></StyledArchive>
      <StyledText sx={{ textAlign: { xs: "center" } }}>
        Your archived notes appear here
      </StyledText>
    </Container>
  );
};

export default EmptyArchivedNotes;
