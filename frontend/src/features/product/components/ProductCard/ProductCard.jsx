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
import BusinessChip from "../ProductUI/BusinessChip";
import ExpandMore from "./ProductCard.styles";

const ProductCard = ({ products }) => {
  const baseUrlStorage = import.meta.env.VITE_BASE_URL_STORAGE;

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
                {products.name}
                <StatusChip enabled={products.status} />
                <BusinessChip
                  businessId={products.businessId}
                  businessName={products.businessName}
                />
              </Typography>
              <ExpandMore
                expand={expanded[products.id] || false}
                onClick={() => handleExpandClick(products.id)}
                aria-expanded={expanded[products.id] || false}
                aria-label="Mostrar más información"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expanded[products.id] || false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent sx={{ backgroundColor: "secondary.main" }}>
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
