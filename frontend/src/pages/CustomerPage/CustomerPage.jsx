import { Box, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { CustomTabPanel, LoadingSkeleton, PaperContainer } from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import CustomerCard from "../../features/customer/components/CustomerCard/CustomerCard";
import CustomerAddModal from "../../features/customer/components/CustomerModal/CustomerAddModal";
import CustomerDeleteModal from "../../features/customer/components/CustomerModal/CustomerDeleteModal";
import CustomerEditModal from "../../features/customer/components/CustomerModal/CustomerEditModal";
import CustomerTable from "../../features/customer/components/CustomerTable/CustomerTable";
import useCustomer from "../../features/customer/hooks/useCustomer";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalState from "../../hooks/useModalState";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CustomerPage = () => {
  const {
    isRegisterOpen,
    isEditOpen,
    isDeleteOpen,
    itemToAction,
    setItemToAction,
    toggleModal,
  } = useModalState();

  const { customers, isLoading } = useCustomer();

  const { isSubmitting, handleAsyncAction } = useAsyncAction(customers);

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <AuthenticatedLayout>
      <PaperContainer relativePosition={true}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="customer tabs"
            variant="scrollable"
          >
            <Tab label="Tarjetas" {...a11yProps(0)} />
            <Tab label="Tabla" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
          {isLoading ? (
            <LoadingSkeleton count={3} xs={12} sm={12} md={6} lg={4} />
          ) : customers && customers.length > 0 ? (
            <Box component="article" mt={4}>
              <Grid container spacing={2}>
                <CustomerCard customers={customers} />
              </Grid>
            </Box>
          ) : (
            <Box component="article" sx={{ mt: 4, textAlign: "center" }}>
              <Typography>Lo sentimos, no se encontraron Clientes</Typography>
            </Box>
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <CustomerTable
              customers={customers}
              onAdd={() => toggleModal("register")}
              onEdit={(customer) => {
                setItemToAction(customer);
                toggleModal("edit");
              }}
              onDelete={(customer) => {
                setItemToAction(customer);
                toggleModal("delete");
              }}
              isSubmitting={isSubmitting}
            />
          )}
          <CustomerAddModal
            open={isRegisterOpen}
            onClose={() => {
              toggleModal("register");
              setItemToAction(null);
            }}
            onAdded={() => handleAsyncAction()}
          />
          {itemToAction && (
            <>
              <CustomerEditModal
                open={isEditOpen}
                onClose={() => {
                  toggleModal("edit");
                  setItemToAction(null);
                }}
                toEdit={itemToAction}
                onEdit={() => handleAsyncAction()}
              />
              <CustomerDeleteModal
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
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default CustomerPage;
