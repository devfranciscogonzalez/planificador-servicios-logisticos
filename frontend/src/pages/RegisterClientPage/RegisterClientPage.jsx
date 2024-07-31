// import { useState, useEffect } from "react";
// import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import { adminService } from "../../services/api/adminService";

// import {
//   Grid,
//   Box,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   // CircularProgress,
//   Snackbar,
//   Typography,
//   Alert,
//   Container,
// } from "@mui/material";

// const RegisterClientPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role_id, setRole] = useState("");
//   const [open, setOpen] = useState(false);

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//   };

//   const {
//     mutate: register,
//     isLoading,
//     isError,
//     error,
//     data,
//   } = useMutation({
//     mutationFn: adminService.register,
//   });

//   useEffect(() => {
//     if (data) {
//       setOpen(true);
//     }
//   }, [data]);

//   const { data: roles } = useQuery({
//     queryKey: ["roles"],
//     queryFn: adminService.getRoles,
//   });
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ name, email, password, role_id });
//     register({ name, email, password, role_id });
//   };

//   if (isLoading) {
//     return <div>Loading...Sigup</div>;
//   }

//   return (
//     <AuthenticatedLayout>
//       <Container component="main" maxWidth="xs">
//         <Box component="form" onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Typography variant="h5" mt={2}>
//                 Registrar
//               </Typography>
//               {isError && (
//                 <Snackbar
//                   open={true}
//                   autoHideDuration={2000}
//                   message={error?.message}
//                 />
//               )}
//               {data && (
//                 <Snackbar
//                   open={open}
//                   autoHideDuration={1000}
//                   onClose={handleClose}
//                 >
//                   <Alert severity="success" onClose={handleClose}>
//                     {data?.message}
//                   </Alert>
//                 </Snackbar>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Name"
//                 variant="outlined"
//                 type="text"
//                 fullWidth
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 type="email"
//                 fullWidth
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Password"
//                 variant="outlined"
//                 type="password"
//                 fullWidth
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth>
//                 <InputLabel id="role-select-label">Rol</InputLabel>
//                 <Select
//                   labelId="role-select-label"
//                   id="role-select"
//                   value={role_id}
//                   label="Rol"
//                   onChange={(e) => setRole(e.target.value)}
//                 >
//                   {roles?.map((r) => (
//                     <MenuItem key={r.role_type} value={r.id}>
//                       {r.role_type}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 disabled={isLoading}
//               >
//                 Registrar
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </AuthenticatedLayout>
//   );
// };

// export default RegisterClientPage;