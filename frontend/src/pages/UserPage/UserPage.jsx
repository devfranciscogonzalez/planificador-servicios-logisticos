import { Divider, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import {
  CustomTabPanel,
  LoadingSkeleton,
  PaperContainer,
} from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import UserAccordion from "../../features/user/components/UserAccordion/UserAccordion";
import UserAddModal from "../../features/user/components/UserModal/UserAddModal";
import UserDeleteModal from "../../features/user/components/UserModal/UserDeleteModal";
import UserEditModal from "../../features/user/components/UserModal/UserEditModal";
import UserTable from "../../features/user/components/UserTable/UserTable";
import useUser from "../../features/user/hooks/useUser";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalState from "../../hooks/useModalState";

const a11yProps = (index) => {
  return {
    id: `user-tab-${index}`,
    "aria-controls": `user-tabpanel-${index}`,
  };
};

const UserPage = () => {
  const { users, isLoading } = useUser();

  const {
    isRegisterOpen,
    isEditOpen,
    isDeleteOpen,
    itemToAction,
    setItemToAction,
    toggleModal,
  } = useModalState();

  const { isSubmitting, handleAsyncAction } = useAsyncAction(users);

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AuthenticatedLayout>
      <PaperContainer>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="users-tabs"
          variant="scrollable"
        >
          <Tab label="Lista" {...a11yProps(0)} />
          <Tab label="Roles" {...a11yProps(1)} />
        </Tabs>
        <Divider />
        <CustomTabPanel value={tabValue} index={0}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <UserTable
              users={users}
              onAdd={() => toggleModal("register")}
              onEdit={(user) => {
                setItemToAction(user);
                toggleModal("edit");
              }}
              onDelete={(user) => {
                setItemToAction(user);
                toggleModal("delete");
              }}
              isSubmitting={isSubmitting}
            />
          )}
          <UserAddModal
            open={isRegisterOpen}
            onClose={() => {
              toggleModal("register");
              setItemToAction(null);
            }}
            onAdded={() => handleAsyncAction()}
          />
          {itemToAction && (
            <>
              <UserEditModal
                open={isEditOpen}
                onClose={() => {
                  toggleModal("edit");
                  setItemToAction(null);
                }}
                toEdit={itemToAction}
                onEdit={() => handleAsyncAction()}
              />
              <UserDeleteModal
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
        <CustomTabPanel value={tabValue} index={1}>
          <UserAccordion />
        </CustomTabPanel>
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default UserPage;
