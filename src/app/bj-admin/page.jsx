"use client"; // mulai mengubah style

import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation"; // Menggunakan useRouter dari next/navigation
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from 'next/dynamic'; // Menggunakan dynamic untuk Quill di lingkungan klien

// Dinamis Quill hanya di lingkungan klien
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AdminPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const uploadFile = async () => {
      if (!file) return;

      const storage = getStorage(app);
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              setMedia(downloadURL);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        }
      );
    };

    uploadFile();
  }, [file]);

  const handleSubmit = async () => {
    if (!title || !value || !media) {
      console.error("Title, description, and media are required");
      return;
    }

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug: catSlug || "style",
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      } else {
        console.error("Failed to create post:", res.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="card-body">
          
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
