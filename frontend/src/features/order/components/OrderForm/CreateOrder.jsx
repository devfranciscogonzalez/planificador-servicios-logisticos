import { yupResolver } from "@hookform/resolvers/yup";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AcceptButton from "../../../../components/common/Button/AcceptButton";
import OverlayLoader from "../../../../components/common/Loading/OverlayLoader";
import useGenericMutation from "../../../../hooks/useGenericMutation";
import useAuth from "../../../auth/hooks/useAuth";
import useCustomer from "../../../customer/hooks/useCustomer";
import useBusinessType from "../../../product/hooks/useBusinessType";
import useProduct from "../../../product/hooks/useProduct";
import useRateCode from "../../../rate/hooks/useRateCode";
import useRoutes from "../../../rate/hooks/useRoutes";
import useService from "../../../service/hooks/useService";
import useServiceType from "../../../service/hooks/useServiceType";
import { ORDER_SNACKBAR } from "../../constants/orderSnackbar";
import usePlanning from "../../hooks/usePlanning";
import useSchedule from "../../hooks/useSchedule";
import { orderService } from "../../services/orderService";
import { validationSchemasOrder } from "../../utils/validationSchemasOrder";
import OrderFormFields from "../OrderInputs/OrderFormFields";
import CheckOrder from "./CheckOrder";
import OrderCodeRate from "./OrderCodeRate";

const CreateOrder = ({ onAdded }) => {
  const { user } = useAuth();
  const { customers } = useCustomer();
  const { serviceType } = useServiceType();
  const { products } = useProduct();
  const { routes } = useRoutes();
  const { services } = useService();
  const { planning } = usePlanning();
  const { schedule } = useSchedule();
  const { businessType } = useBusinessType();

  const DEFAULT_VALUES_ORDER = {
    date: null,
    code: "",
    rate_id: "",
    planning_id: "",
    schedule_id: "",
    customer_id: "",
    service_type_id: "",
    service_id: "",
    product_id: "",
    business_id: "",
    route_id: "",
    container: "",
    status: 0,
    user_id: user?.id || "",
  };

  const { handleSubmit, control, watch, reset, setValue } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemasOrder),
    defaultValues: DEFAULT_VALUES_ORDER,
  });

  const selectedCode = watch("code");
  const { rateCode, isSuccess } = useRateCode(selectedCode);

  useEffect(() => {
    if (isSuccess && rateCode) {
      setValue("rate_id", rateCode.id);
      setValue("customer_id", rateCode.customer_id);
      setValue("service_type_id", rateCode.service_type_id);
      setValue("service_id", rateCode.service_id);
      setValue("product_id", rateCode.product_id);
      setValue("business_id", rateCode.business_id);
      setValue("route_id", rateCode.route_id);
    }
  }, [isSuccess, rateCode, setValue, selectedCode]);

  const addMutation = useGenericMutation({
    mutationFn: orderService.addOrder,
    successMessage: ORDER_SNACKBAR.ORDER_REGISTER_SUCCESS.message,
    errorMessage: ORDER_SNACKBAR.ORDER_REGISTER_ERROR.message,
    onSuccessCallback: () => {
      onAdded?.();
      reset(DEFAULT_VALUES_ORDER);
      setActiveStep(0);
    },
  });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      date: data.date ? dayjs(data.date).format("YYYY-MM-DD HH:mm:ss") : null,
    };
    addMutation.mutate(formattedData);
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ["Tarifa Código", "Formulario OS", "Revisar OS"];

  const isNextButtonDisabled = (step) => {
    if (step === 0) {
      return !selectedCode;
    }
    return false;
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <OrderCodeRate control={control} setValue={setValue} />;
      case 1:
        return (
          <OrderFormFields
            control={control}
            customers={customers}
            serviceType={serviceType}
            services={services}
            products={products}
            businessType={businessType}
            routes={routes}
            planning={planning}
            schedule={schedule}
          />
        );
      case 2:
        return (
          <CheckOrder
            watch={watch}
            customers={customers}
            serviceType={serviceType}
            services={services}
            products={products}
            routes={routes}
            planning={planning}
            schedule={schedule}
            businessType={businessType}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Paper sx={{ p: { xs: 1, sm: 2 } }}>
        <OverlayLoader isLoading={addMutation.isPending} />
        <Typography component="h1" variant="subtitle1" align="center">
          Formulario de Creación de OS
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <>
            <Typography variant="subtitle1">
              Todos los pasos completados
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignContent: "center",
                p: 1,
                mt: 1,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Enviar Formulario
              </Button>
            </Box>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                p: 1,
                mt: 1,
              }}
            >
              {activeStep === 0 && (
                <Button
                  variant="text"
                  onClick={() => reset(DEFAULT_VALUES_ORDER)}
                  startIcon={<RestartAltIcon />}
                >
                  Resetear Campos
                </Button>
              )}

              {activeStep !== 0 && (
                <Button
                  variant="text"
                  onClick={handleBack}
                  startIcon={<NavigateBeforeIcon />}
                >
                  Volver
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <AcceptButton
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                  isPending={addMutation.isPending}
                  fullWidth={false}
                >
                  Confirmar Tarifa
                </AcceptButton>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  endIcon={<NavigateNextIcon />}
                  disabled={isNextButtonDisabled(activeStep)}
                >
                  Siguiente
                </Button>
              )}
            </Box>
          </>
        )}
      </Paper>
    </Grid>
  );
};

export default CreateOrder;
