import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; 
import { grey } from "@mui/material/colors";
import { useState } from "react";
import UserAvatar from "../../../features/user/components/UserAvatar/UserAvatar";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const baseUrl =
    import.meta.env.VITE_BASE_URL_STORAGE || "http://localhost:8000/storage/";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {data?.map((item) => (
        <Grid xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardHeader
              avatar={
                <UserAvatar role={item.user.roleId} name={item.user.name} />
              }
              title={item.user.name}
              subheader={
                <Box sx={{ color: grey[400] }}>
                  {item.user.email}
                  <br />
                  {item.createdAt}
                </Box>
              }
              sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
            />
            {item.logo && (
              <CardMedia
                component="img"
                height="160"
                image={`${baseUrl}${item.logo}`}
                alt={item.name}
                sx={{ objectFit: "contain", objectPosition: "center" }}
              />
            )}
            <CardActionArea>
              <CardContent sx={{ display: "flex" }}>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardContent>
              <Divider />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
              </Collapse>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default CustomCard;
