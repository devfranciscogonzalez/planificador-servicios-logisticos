import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { StatusChip } from "../../../../components/ui";
import UserAvatar from "../../../user/components/UserAvatar/UserAvatar";
import ExpandMore from "./CustomerCard.styles";

const CustomerCard = ({ customers }) => {
  const baseUrlStorage = import.meta.env.VITE_BASE_URL_STORAGE;

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
          <Card
            sx={{
              outlineStyle: "solid",
              outlineColor: "secondary.main",
              outlineWidth: "2px",
            }}
          >
            <CardHeader
              avatar={
                <UserAvatar
                  name={customer.user.name}
                  roleId={customer.user.roleId}
                />
              }
              title={customer.user.name}
              subheader={
                <Box sx={{ color: blue[100] }}>
                  {customer.user.email}
                  <br />
                  {customer.createdAt}
                </Box>
              }
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
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
            <CardActions disableSpacing sx={{ p: 2 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: "flex",
                  columnGap: 1,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {customer.name}
                <StatusChip enabled={customer.status} />
              </Typography>
              <ExpandMore
                expand={expanded[customer.id] || false}
                onClick={() => handleExpandClick(customer.id)}
                aria-expanded={expanded[customer.id] || false}
                aria-label="Mostrar más información"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expanded[customer.id] || false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent sx={{ backgroundColor: "secondary.main" }}>
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
