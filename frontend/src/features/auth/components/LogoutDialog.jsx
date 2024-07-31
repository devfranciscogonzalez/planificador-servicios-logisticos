import GenericConfirmDialog from "../../../components/modal/GenericConfirmModal";

function LogoutDialog({ logout, open, handleToggleDialog }) {
  return (
    <>
      <GenericConfirmDialog
        open={open}
        onClose={handleToggleDialog}
        onConfirm={logout.mutate}
        title="Confirmar Salida"
        confirmButtonText="Salir"
        cancelButtonText="Cancelar"
        isPending={logout.isPending}
      />
    </>
  );
}

export default LogoutDialog;
