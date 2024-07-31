import OrderFormFields from "../OrderInputs/OrderFormFields";

const OrderForm = ({
  control,
  watch,
  setValue,
  customers,
  serviceType,
  products,
  routes,
}) => {
  return (
    <OrderFormFields
      control={control}
      watch={watch}
      setValue={setValue}
      customers={customers}
      serviceType={serviceType}
      products={products}
      routes={routes}
    />
  );
};

export default OrderForm;
