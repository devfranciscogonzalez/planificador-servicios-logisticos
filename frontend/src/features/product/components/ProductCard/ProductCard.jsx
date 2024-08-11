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
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { blue } from "@mui/material/colors";
import { useState } from "react";
import UserAvatar from "../../../user/components/UserAvatar/UserAvatar";
import StatusChip from "../../../../components/ui/StatusChip";
import BusinessChip from "../ProductUI/BusinessChip";

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expand',
})(({ theme, expand }) => ({
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard = ({ products }) => {
  const baseUrlStorage =
    import.meta.env.VITE_BASE_URL_STORAGE || "http://localhost:8000/storage/";

  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (productId) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [productId]: !prevExpanded[productId],
    }));
  };

  return (
    <>
      {products?.map((products) => (
        <Grid xs={12} sm={12} md={6} lg={4} key={products.id}>
          <Card>
            <CardHeader
              avatar={
                <UserAvatar
                  name={products.user.name}
                  roleId={products.user.roleId}
                />
              }
              title={products.user.name}
              subheader={
                <Box sx={{ color: blue[100] }}>
                  {products.user.email}
                  <br />
                  {products.createdAt}
                </Box>
              }
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                position: "relative",
              }}
            />

            {products.logo && (
              <CardMedia
                component="img"
                height="160"
                image={`${baseUrlStorage}${products.logo}`}
                alt={products.name}
                sx={{ objectFit: "contain", objectPosition: "center" }}
              />
            )}

            <CardActions disableSpacing>
              <Typography gutterBottom variant="h6" component="div">
                {products.name}
                <StatusChip enabled={products.status} sx={{ m: 1 }} />
                <BusinessChip
                  businessId={products.businessId}
                  businessName={products.businessName}
                />
              </Typography>
              <ExpandMore
                expand={expanded[products.id] || false}
                onClick={() => handleExpandClick(products.id)}
                aria-expanded={expanded[products.id] || false}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Divider />
            <Collapse
              in={expanded[products.id] || false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography variant="body2">{products.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default ProductCard;
