// import { useMutation } from "@tanstack/react-query";
// import { useState } from "react";

// const useCustomMutation = (mutationFn) => {
//   const [error, setError] = useState(null);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const mutation = useMutation(mutationFn, {
//     onSuccess: (data) => {
//       setIsSuccess(true);
//       setError(null);
//     },
//     onError: (error) => {
//       setError(error);
//       setIsSuccess(false);
//       console.error(error);
//     },
//   });

//   return { mutation, error, isSuccess };
// };

// export default useCustomMutation;


