"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <span 
        disabled={!hasPrev}
        className='prev slick-arrow'
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        <i className='fal fa-angle-left'></i>
      </span>

      <span 
        disabled={!hasNext}
        className='next slick-arrow'
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        <i className='fal fa-angle-right'></i>
      </span>
    </div>
  );
};

export default Pagination;
