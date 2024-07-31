import { yupResolver } from "@hookform/resolvers/yup";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ActionModal from "../../../../components/modal/ActionModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import useAuth from "../../../auth/hooks/useAuth";
import { PRODUCT_SNACKBAR } from "../../constants/productSnackbar";
import useBusinessType from "../../hooks/useBusinessType";
import { productService } from "../../services/productService";
import { validationSchemasProduct } from "../../utils/validationSchemasProduct";
import ProductFormFields from "../ProductInputs/ProductFormFields";

const ProductEditModal = ({ open, onClose, toEdit, onUpdated }) => {
  const { user } = useAuth();

  const DEFAULT_VALUES_EDIT_PRODUCT = {
    name: "",
    description: "",
    status: false,
    logo: "",
    business_id: "",
    user_id: user?.id || "",
  };

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(validationSchemasProduct),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES_EDIT_PRODUCT,
  });

  const { businessType } = useBusinessType();

  // cargar datos del usuario a editar
  useEffect(() => {
    if (toEdit) {
      reset({
        name: toEdit.name,
        description: toEdit.description,
        status: Boolean(toEdit.status),
        logo: "undefined",
        business_id: toEdit.businessId,
        user_id: user?.id || "",
      });
    }
  }, [toEdit, reset, user]);

  const customerUpdateMutation = useGenericMutation({
    mutationFn: (data) => productService.updateProduct(toEdit.id, data),
    successMessage: PRODUCT_SNACKBAR.PRODUCT_EDIT_SUCCESS.message,
    errorMessage: PRODUCT_SNACKBAR.PRODUCT_EDIT_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onUpdated?.();
    },
  });

  // enviar datos del formulario para editar usuario
  const onSubmit = (data) => {
    customerUpdateMutation.mutate(data);
  };

  return (
    <ActionModal
      open={open}
      onClose={onClose}
      title="Editar Producto"
      onSubmit={handleSubmit(onSubmit)}
      isPending={customerUpdateMutation.isPending}
      submitLabel="Editar"
      acceptButtonIcon={<ProductionQuantityLimitsIcon />}
    >
      <ProductFormFields control={control} businessType={businessType} />
    </ActionModal>
  );
};

export default ProductEditModal;
