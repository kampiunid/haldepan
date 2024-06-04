"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status, data: session } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          <div className="d-flex align-items-center">
            <i className={`fal fa-user-circle mr-1 fa-lg text-secondary`}></i>
            <span>Login</span>
          </div>
        </Link>
      ) : (
        <>
          
          <Link href="/write" className={styles.link}>
            <i className="fal fa-pen mr-1 fa-md text-secondary"></i>
          </Link>
          <span className={styles.link} onClick={signOut}>
          <div className="d-flex align-items-center">
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt="Profile"
                className={`${styles.profileImage} rounded-circle mr-1`}
                style={{
                  width: '20px', // Sesuaikan dengan ukuran ikon fal fa-user-circle
                  height: '20px', // Sesuaikan dengan ukuran ikon fal fa-user-circle
                }}
              />
            ) : null}
            <span>Logout</span>
          </div>
            
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
