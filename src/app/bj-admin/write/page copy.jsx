"use client";

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

const WritePage = () => {
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
    router.push("/");
    return null;
  }
  
  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="card-header">
          <h3>Create a New Post</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              placeholder="Judul berita"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              onChange={(e) => setCatSlug(e.target.value)}
            >
              <option value="style">style</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="culture">culture</option>
              <option value="travel">travel</option>
              <option value="coding">coding</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={() => setOpen(!open)}>
              <i className="fas fa-plus"></i>
            </button>
            {open && (
              <div className="mt-3">
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <button className="btn btn-secondary mr-2">
                  <label htmlFor="image" className="mb-0">
                    <i className="fas fa-image"></i>
                  </label>
                </button>
                <button className="btn btn-secondary mr-2">
                  <i className="fas fa-link"></i>
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-video"></i>
                </button>
              </div>
            )}
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="10"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Tulis berita di sini..."
            />
          </div>
        </div>
        <div className="card-footer text-right">
          <button className="btn btn-success" onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
