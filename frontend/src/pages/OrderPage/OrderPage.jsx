import { Divider, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import {
  CustomTabPanel,
  LoadingSkeleton,
  PaperContainer,
} from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import CreateOrder from "../../features/order/components/OrderForm/CreateOrder";
import OrderDeleteModal from "../../features/order/components/OrderModal/OrderDeleteModal";
import OrderEditModal from "../../features/order/components/OrderModal/OrderEditModal";
import OrderEndModal from "../../features/order/components/OrderModal/OrderEndModal";
import OrderTable from "../../features/order/components/OrderTable/OrderTable";
import OrderTableEnd from "../../features/order/components/OrderTable/OrderTableEnd";
import OrderTableReschedule from "../../features/order/components/OrderTable/OrderTableReschedule";
import useOrder from "../../features/order/hooks/useOrder";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalState from "../../hooks/useModalState";

const a11yProps = (index) => {
  return {
    id: `service-tab-${index}`,
    "aria-controls": `service-tabpanel-${index}`,
  };
};

const OrderPage = () => {
  const { orders, isLoading } = useOrder();

  const [tabValue, setTabValue] = useState(0);

  const [moveEnd, setMoveEnd] = useState(false);

  const {
    isEditOpen,
    isDeleteOpen,
    itemToAction,
    setItemToAction,
    toggleModal,
  } = useModalState();
  const { isSubmitting, handleAsyncAction } = useAsyncAction(orders);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <AuthenticatedLayout>
      <PaperContainer relativePosition={true}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="service tabs"
          variant="scrollable"
        >
          <Tab label="Nueva Orden de Servicio" {...a11yProps(0)} />
          <Tab label="Orden de Servicio" {...a11yProps(1)} />
          <Tab label="Reprogramado" {...a11yProps(2)} />
          <Tab label="Finalizado" {...a11yProps(3)} />
        </Tabs>
        <Divider />
        <CustomTabPanel
          value={tabValue}
          index={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CreateOrder onAdded={() => handleAsyncAction()} />
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <OrderTable
              orders={orders}
              onEdit={(order) => {
                setItemToAction(order);
                toggleModal("edit");
              }}
              onMoveEnd={(order) => {
                setMoveEnd(true);
                setItemToAction(order);
              }}
              isSubmitting={isSubmitting}
            />
          )}
          {itemToAction && (
            <>
              <OrderEditModal
                open={isEditOpen}
                onClose={() => {
                  toggleModal("edit");
                  setItemToAction(null);
                }}
                toEdit={itemToAction}
                onEdit={() => handleAsyncAction()}
              />
              <OrderEndModal
                open={moveEnd}
                onClose={() => {
                  setMoveEnd(false);
                  setItemToAction(null);
                }}
                toMove={itemToAction}
                onMove={() => handleAsyncAction()}
              />
            </>
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <OrderTableReschedule orders={orders} isSubmitting={isSubmitting} />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={3}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <OrderTableEnd
              orders={orders}
              onDelete={(order) => {
                setItemToAction(order);
                toggleModal("delete");
              }}
              isSubmitting={isSubmitting}
            />
          )}
          {itemToAction && (
            <OrderDeleteModal
              open={isDeleteOpen}
              onClose={() => {
                toggleModal("edit");
                setItemToAction(null);
              }}
              toDelete={itemToAction}
              onDelete={() => handleAsyncAction()}
            />
          )}
        </CustomTabPanel>
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default OrderPage;
