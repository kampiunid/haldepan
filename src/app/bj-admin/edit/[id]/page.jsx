"use client"; // mulai mengubah style

import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter, usePathname } from "next/navigation"; // Menggunakan useRouter dari next/navigation
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from 'next/dynamic'; // Menggunakan dynamic untuk Quill di lingkungan klien

const getData = async (id) => {
  const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
  const res = await fetch(`${baseURL}/api/posts/edit/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  return res.json();
};

// Dinamis Quill hanya di lingkungan klien
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditPage = ({ params }) => {
  const { id } = params; // Mengambil id dari params yang diterima sebagai prop
  const { status } = useSession();
  const router = useRouter();
  
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    if (id) {
      getData(id).then(data => {
        setTitle(data.title);
        setCatSlug(data.catSlug);
        setValue(data.desc);
        setMedia(data.img);
      }).catch(error => {
        console.error("Failed to fetch post data:", error);
      });
    }
  }, [id]);

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
      const res = await fetch(`/api/posts/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          catSlug: catSlug || "style",
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      } else {
        const errorData = await res.json();
        console.error(`Failed to update post: ${errorData.message}`);
      }
    } catch (error) {
      console.error(`Error updating post:`, error);
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
          <h3>{id ? "Edit Post" : "Create a New Post"}</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              placeholder="Judul berita"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={catSlug}
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
            {id ? "Update" : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
