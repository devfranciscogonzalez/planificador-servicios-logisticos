import PaperContainer from "../../components/common/Container/PaperContainer";
import LoadingSkeleton from "../../components/common/Loading/LoadingSkeleton";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import OrderInput from "../../features/order/components/OrderTable/OrderInput";
import useOrder from "../../features/order/hooks/useOrder";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalState from "../../hooks/useModalState";
import OrderInputModal from "../../features/order/components/OrderModal/OrderInputModal";

const OrderInputPage = () => {
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
          <OrderInput
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
            <OrderInputModal
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

export default OrderInputPage;
