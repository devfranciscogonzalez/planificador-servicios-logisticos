import PaperContainer from "../../components/common/Container/PaperContainer";
import LoadingSkeleton from "../../components/common/Loading/LoadingSkeleton";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import OrderTruck from "../../features/order/components/OrderTable/OrderTruck";
import useOrder from "../../features/order/hooks/useOrder";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalState from "../../hooks/useModalState";
import OrderAddTrunckModal from "../../features/order/components/OrderModal/OrderAddTruckModal";

const OrderTruckPage = () => {
  const { orders, isLoading } = useOrder();

  const { isEditOpen, itemToAction, setItemToAction, toggleModal } =
    useModalState();

  const { isSubmitting, handleAsyncAction } = useAsyncAction(orders);

  return (
    <AuthenticatedLayout>
      <PaperContainer relativePosition={true}>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <OrderTruck
            orders={orders}
            onEdit={(rate) => {
              setItemToAction(rate);
              toggleModal("edit");
            }}
            isSubmitting={isSubmitting}
          />
        )}
        {itemToAction && (
          <>
            <OrderAddTrunckModal
              open={isEditOpen}
              onClose={() => {
                toggleModal("edit");
                setItemToAction(null);
              }}
              toAdd={itemToAction}
              onAdd={() => handleAsyncAction()}
            />
          </>
        )}
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default OrderTruckPage;
