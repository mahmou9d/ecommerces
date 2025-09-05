import Loader from "../../components/Loader";
import { lazy, Suspense } from "react";
const TotalCategory = lazy(() => import("./totalCategory"));

const category1 = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <TotalCategory title={"speaker"} />
      </Suspense>
    </div>
  );
};

export default category1;
