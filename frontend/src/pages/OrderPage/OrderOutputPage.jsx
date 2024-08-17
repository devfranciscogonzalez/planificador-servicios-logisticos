import { LoadingSkeleton, PaperContainer } from "../../components/common";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import OrderOutputModal from "../../features/order/components/OrderModal/OrderOutputModal";
import OrderOutput from "../../features/order/components/OrderTable/OrderOutput";
import useOrder from "../../features/order/hooks/useOrder";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalState from "../../hooks/useModalState";

const OrderOutputPage = () => {
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
          <OrderOutput
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
            <OrderOutputModal
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
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default OrderOutputPage;
