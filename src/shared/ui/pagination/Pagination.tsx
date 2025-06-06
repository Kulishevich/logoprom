"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { getPaginationPages } from "@/shared/lib/utils/getPaginationPages";
import cn from "clsx";
import s from "./Pagination.module.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "@/shared/assets/icons";
import clsx from "clsx";

export interface PaginationProps {
  totalPages: number;
  currentPage?: string;
  className?: string;
}

export const Pagination = ({
  totalPages,
  currentPage = "1",
  className,
}: PaginationProps) => {
  const [paginationPages, setPaginationPages] = useState<number[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentPageNumber = +currentPage;
  const totalPagesNumber = +totalPages;

  function handlePageChange(page: number) {
    return () => {
      const params = new URLSearchParams(searchParams);

      params.set("page", page.toString());

      const url = `${pathname}?${params.toString()}`;
      router.push(url, { scroll: false });
    };
  }

  useEffect(() => {
    const pages = getPaginationPages({
      currentPage: currentPageNumber,
      totalPages: totalPagesNumber,
    });

    setPaginationPages(pages);
  }, [currentPageNumber, totalPagesNumber]);

  if (totalPagesNumber < 2) {
    return <></>;
  }

  return (
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <div className={clsx(s.container, className)}>
        {currentPageNumber !== 1 && (
          <button
            className={s.button}
            onClick={handlePageChange(currentPageNumber - 1)}
            disabled={currentPageNumber === 1}
          >
            <ArrowLeftIcon />
          </button>
        )}
        <div className={s.pagination}>
          {paginationPages.map((page) => {
            const isActive = currentPageNumber == page;

            return (
              <button
                key={page}
                className={cn(isActive && s.active, s.paginationElem, "body_1")}
                onClick={handlePageChange(page)}
              >
                {page}
              </button>
            );
          })}
        </div>
        {currentPageNumber !== totalPagesNumber && (
          <button
            className={s.button}
            onClick={handlePageChange(currentPageNumber + 1)}
          >
            <ArrowRightIcon />
          </button>
        )}
      </div>
    </Suspense>
  );
};
