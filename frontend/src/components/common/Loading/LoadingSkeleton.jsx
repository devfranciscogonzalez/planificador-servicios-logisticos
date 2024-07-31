import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

const SkeletonItem = ({ index, xs = 12, sm = 12, md = 12, lg = 12 }) => (
  <Grid item xs={xs} sm={sm} md={md} lg={lg} key={index}>
    <Skeleton width="100%" animation="wave" height={80} />
    <Skeleton variant="rectangular" width="100%" height={118} />
  </Grid>
);

const LoadingSkeleton = ({ count = 1, xs, sm, md, lg }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(count)).map((_, index) => (
        <SkeletonItem key={index} index={index} xs={xs} sm={sm} md={md} lg={lg} />
      ))}
    </Grid>
  );
};

export default LoadingSkeleton;