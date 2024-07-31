import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { grey } from "@mui/material/colors";
import { useState } from "react";
import UserAvatar from "../../../user/components/UserAvatar/UserAvatar";
import StatusChip from "../../../../components/ui/StatusChip";
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

const CustomerCard = ({ customers }) => {
  const baseUrlStorage =
    import.meta.env.VITE_BASE_URL_STORAGE || "http://localhost:8000/storage/";

  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (customerId) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [customerId]: !prevExpanded[customerId],
    }));
  };

  return (
    <>
      {customers?.map((customer) => (
        <Grid xs={12} sm={12} md={6} lg={4} key={customer.id}>
          <Card>
            <CardHeader
              avatar={
                <UserAvatar
                  name={customer.user.name}
                  roleId={customer.user.roleId}
                />
              }
              title={customer.user.name}
              subheader={
                <Box sx={{ color: grey[400] }}>
                  {customer.user.email}
                  <br />
                  {customer.createdAt}
                </Box>
              }
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                position: "relative",
              }}
            />

            {customer.logo && (
              <CardMedia
                component="img"
                height="160"
                image={`${baseUrlStorage}${customer.logo}`}
                alt={customer.name}
                sx={{ objectFit: "contain", objectPosition: "center" }}
              />
            )}

            <CardActions disableSpacing>
              <Typography gutterBottom variant="h6" component="div">
                {customer.name}
                <StatusChip enabled={customer.status} sx={{ m: 1 }} />
              </Typography>
              <ExpandMore
                expand={expanded[customer.id] || false}
                onClick={() => handleExpandClick(customer.id)}
                aria-expanded={expanded[customer.id] || false}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expanded[customer.id] || false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography variant="body2">{customer.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default CustomerCard;
