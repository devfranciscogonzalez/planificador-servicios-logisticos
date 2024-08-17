import { Divider, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel, LoadingSkeleton, PaperContainer } from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import CreateRate from "../../features/rate/components/RateForm/CreateRate";
import RateEditStatusModal from "../../features/rate/components/RateModal/RateEditStatusModal";
import RateTableCurrent from "../../features/rate/components/RateTable/RateTableCurrent";
import RateTableIdle from "../../features/rate/components/RateTable/RateTableIdle";
import useRate from "../../features/rate/hooks/useRate";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalState from "../../hooks/useModalState";

const a11yProps = (index) => {
  return {
    id: `service-tab-${index}`,
    "aria-controls": `service-tabpanel-${index}`,
  };
};

const RatePage = () => {
  const { rates, isLoading } = useRate();

  const { isEditOpen, itemToAction, setItemToAction, toggleModal } =
    useModalState();

  const { isSubmitting, handleAsyncAction } = useAsyncAction(rates);

  const [tabValue, setTabValue] = useState(0);
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
          <Tab label="Nueva Tarifa" {...a11yProps(0)} />
          <Tab label="Tarifas Vigente" {...a11yProps(1)} />
          <Tab label="Tarifas Inactiva" {...a11yProps(1)} />
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
          <CreateRate onAdded={() => handleAsyncAction()} />
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <RateTableCurrent
              rates={rates}
              onEdit={(rate) => {
                setItemToAction(rate);
                toggleModal("edit");
              }}
              isSubmitting={isSubmitting}
            />
          )}
          {itemToAction && (
            <>
              <RateEditStatusModal
                open={isEditOpen}
                onClose={() => {
                  toggleModal("edit");
                  setItemToAction(null);
                }}
                toEdit={itemToAction}
                onEdit={() => handleAsyncAction()}
              />
            </>
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <RateTableIdle rates={rates} isSubmitting={isSubmitting} />
          )}
        </CustomTabPanel>
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default RatePage;
