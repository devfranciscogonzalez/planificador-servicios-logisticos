import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { CustomTabPanel, LoadingSkeleton, PaperContainer } from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import BusinessAccordion from "../../features/product/components/BusinessAccordion/BusinessAccordion";
import ProductCard from "../../features/product/components/ProductCard/ProductCard";
import ProductAddModal from "../../features/product/components/ProductModal/ProductAddModal";
import ProductDeleteModal from "../../features/product/components/ProductModal/ProductDeleteModal";
import ProductEditModal from "../../features/product/components/ProductModal/ProductEditModal";
import ProductTable from "../../features/product/components/ProductTable/ProductTable";
import useProduct from "../../features/product/hooks/useProduct";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalState from "../../hooks/useModalState";

const a11yProps = (index) => {
  return {
    id: `product-tab-${index}`,
    "aria-controls": `product-tabpanel-${index}`,
  };
};

const ProductPage = () => {
  const { products, isLoading } = useProduct();
  const {
    isRegisterOpen,
    isEditOpen,
    isDeleteOpen,
    itemToAction,
    setItemToAction,
    toggleModal,
  } = useModalState();

  const { isSubmitting, handleAsyncAction } = useAsyncAction(products);

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AuthenticatedLayout>
      <PaperContainer title="Lista de Productos" relativePosition={true}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="products tabs"
          variant="scrollable"
        >
          <Tab label="Tarjetas" {...a11yProps(0)} />
          <Tab label="Productos" {...a11yProps(1)} />
          <Tab label="Tipos de Negocio" {...a11yProps(2)} />
        </Tabs>
        <Divider />
        <CustomTabPanel value={tabValue} index={0}>
          {isLoading ? (
            <LoadingSkeleton count={3} xs={12} sm={12} md={6} lg={4} />
          ) : products && products.length > 0 ? (
            <Box component="article" mt={4} >
              <Grid container spacing={2}>
                <ProductCard products={products} />
              </Grid>
            </Box>
          ) : (
            <Box component="article" sx={{ mt: 4, textAlign: "center" }}>
              <Typography>Lo sentimos, no se encontraron Productos</Typography>
            </Box>
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <ProductTable
              products={products}
              onAdd={() => toggleModal("register")}
              onEdit={(product) => {
                setItemToAction(product);
                toggleModal("edit");
              }}
              onDelete={(product) => {
                setItemToAction(product);
                toggleModal("delete");
              }}
              isSubmitting={isSubmitting}
            />
          )}
          <ProductAddModal
            open={isRegisterOpen}
            onClose={() => {
              toggleModal("register");
              setItemToAction(null);
            }}
            onAdded={() => handleAsyncAction()}
          />
          {itemToAction && (
            <>
              <ProductEditModal
                open={isEditOpen}
                onClose={() => {
                  toggleModal("edit");
                  setItemToAction(null);
                }}
                toEdit={itemToAction}
                onUpdated={() => handleAsyncAction()}
              />
              <ProductDeleteModal
                open={isDeleteOpen}
                onClose={() => {
                  toggleModal("delete");
                  setItemToAction(null);
                }}
                toDelete={itemToAction}
                onDelete={() => handleAsyncAction()}
              />
            </>
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          <BusinessAccordion />
        </CustomTabPanel>
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default ProductPage;
