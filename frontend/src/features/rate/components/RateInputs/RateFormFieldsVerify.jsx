import { TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { CustomSelect } from "../../../../components/common";
import useServiceByType from "../../../service/hooks/useServiceByType";

const RateFormFieldsVerify = ({
  control,
  watch,
  setValue,
  customers,
  serviceType,
  products,
  routes,
}) => {
  // Observar cambios en los campos relevantes
  const customerId = watch("customer_id");
  const serviceId = watch("service_id");
  const serviceTypeId = watch("service_type_id");
  const productId = watch("product_id");
  const { serviceByType } = useServiceByType(serviceTypeId);
  const selectedProduct = products && products.find((p) => p.id === productId);
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    const isServiceIdValid = serviceByType?.some((s) => s.id === serviceId);
    if (serviceTypeId && !isServiceIdValid) {
      setValue("service_id", "");
    }
  }, [serviceTypeId, serviceByType, serviceId, setValue]);

  useEffect(() => {
    if (selectedProduct && selectedProduct.business) {
      setBusinessName(selectedProduct.business.name);
      setValue("business_id", selectedProduct.business.id);
    } else {
      setBusinessName("");
    }
  }, [selectedProduct, setValue]);

  return (
    <>
      <Grid xs={12} wrap>
        <CustomSelect
          control={control}
          name="customer_id"
          label="Cliente"
          options={(customers ?? []).map((c) => ({
            value: c.id,
            label: c.name,
          }))}
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="service_type_id"
          label="Tipo de Servicio"
          options={(serviceType ?? []).map((s) => ({
            value: s.id,
            label: s.name,
          }))}
          disabled={!customerId}
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="service_id"
          label="Servicio"
          options={(serviceByType ?? []).map((s) => ({
            value: s.id,
            label: s.name,
          }))}
          disabled={
            !serviceTypeId || (serviceByType && serviceByType.length === 0)
          }
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="product_id"
          label="Producto"
          options={(products ?? []).map((p) => ({
            value: p.id,
            label: p.name,
          }))}
          disabled={!serviceId}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label="Tipo de Negocio"
          fullWidth
          value={businessName}
          helperText={businessName !== "" ? "Correcto" : ""}
          FormHelperTextProps={{
            style: { color: "#0070ba" },
          }}
          disabled
        />
      </Grid>
      <Grid xs={12}>
        <CustomSelect
          control={control}
          name="route_id"
          label="Ruta"
          options={(routes ?? []).map((r) => ({
            value: r.id,
            label: r.name,
          }))}
          disabled={!productId}
        />
      </Grid>
    </>
  );
};

export default RateFormFieldsVerify;
