import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, FormHelperText } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { Controller } from "react-hook-form";
import CustomIconButton from "../Button/CustomIconButton";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.grey[700],
  color: theme.palette.grey[700],
  "&:hover": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
  },
}));

const ImagePreview = styled("img")({
  maxWidth: "100%",
  maxHeight: "200px",
  marginTop: "8px",
});

const CustomImageUpload = ({ name, control }) => {
  const [fileName, setFileName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Grid xs={12}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
          <>
            <StyledButton
              component="label"
              variant="outlined"
              fullWidth
              startIcon={<AddPhotoAlternateIcon />}
            >
              Subir imagen (opcional)
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file) {
                    setFileName(file.name);
                    setSelectedImage(URL.createObjectURL(file));
                    onChange(file);
                  }
                }}
                onBlur={onBlur}
                accept="image/*"
              />
            </StyledButton>
            {fileName && (
              <Box fullWidth>
                <FormHelperText
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  Archivo seleccionado: {fileName}
                  <CustomIconButton aria-label="delete">
                    <DeleteIcon
                      onClick={() => {
                        setFileName("");
                        setSelectedImage(null);
                        onChange(null);
                      }}
                    />
                  </CustomIconButton>
                </FormHelperText>
                <ImagePreview src={selectedImage} alt="Vista previa" />
              </Box>
            )}
            {error ? (
              <FormHelperText sx={{ color: "error.main" }} error>
                {error.message}
              </FormHelperText>
            ) : (
              <FormHelperText sx={{ my: 0 }}>
                Campo opcional. Tamaño máximo del archivo: 2MB.
              </FormHelperText>
            )}
          </>
        )}
      />
    </Grid>
  );
};

export default CustomImageUpload;
