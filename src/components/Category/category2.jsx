import Loader from "../../components/Loader";
import { lazy, Suspense } from "react";

const TotalCategory = lazy(() => import("./totalCategory"));

const category2 = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <TotalCategory title={"headphone"} />
      </Suspense>
    </div>
  );
};

export default category2;
