import { yupResolver } from "@hookform/resolvers/yup";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useForm } from "react-hook-form";
import ActionModal from "../../../../components/modal/ActionModal";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import useAuth from "../../../auth/hooks/useAuth";
import { PRODUCT_SNACKBAR } from "../../constants/productSnackbar";
import useBusinessType from "../../hooks/useBusinessType";
import { productService } from "../../services/productService";
import { validationSchemasProduct } from "../../utils/validationSchemasProduct";
import ProductFormFields from "../ProductInputs/ProductFormFields";

const ProductAddModal = ({ open, onClose, onAdded }) => {
  const { user } = useAuth();

  const DEFAULT_VALUES_PRODUCT = {
    name: "",
    description: "",
    status: false,
    logo: "",
    business_id: "",
    user_id: user?.id || "",
  };

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemasProduct),
    defaultValues: DEFAULT_VALUES_PRODUCT,
  });

  const { businessType } = useBusinessType();

  const addProductMutation = useGenericMutation({
    mutationFn: productService.addProduct,
    successMessage: PRODUCT_SNACKBAR.PRODUCT_REGISTER_SUCCESS.message,
    errorMessage: PRODUCT_SNACKBAR.PRODUCT_REGISTER_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onAdded?.();
    },
  });

  const onSubmit = (data) => {
    addProductMutation.mutate(data);
  };

  // Reset campos del formulario al cerrar el modal
  const handleClose = () => {
    reset();
    onClose();
  };
  return (
    <ActionModal
      open={open}
      onClose={handleClose}
      title="Agregar Producto"
      onSubmit={handleSubmit(onSubmit)}
      isPending={addProductMutation.isPending}
      submitLabel="Agregar"
      acceptButtonIcon={<ProductionQuantityLimitsIcon />}
    >
      <ProductFormFields control={control} businessType={businessType} />
    </ActionModal>
  );
};

export default ProductAddModal;
