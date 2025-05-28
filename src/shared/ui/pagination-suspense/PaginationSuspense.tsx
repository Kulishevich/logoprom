import React, { Suspense } from "react";
import { Pagination, PaginationProps } from "../pagination/Pagination";

export const PaginationSuspense = (props: PaginationProps) => {
  return (
    <Suspense fallback={<p className="body_4">Загрузка...</p>}>
      <Pagination {...props} />
    </Suspense>
  );
};
