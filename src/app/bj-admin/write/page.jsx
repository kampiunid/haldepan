"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";
import "react-quill/dist/quill.snow.css";

// Dinamis Quill hanya di lingkungan klien
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const QuillEditor = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
      [{ align: [] }], // Menambahkan opsi untuk alignment
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "align", // Menambahkan format untuk alignment
  ];

  return (
    <div className="form-group">
      <ReactQuill
        className="mb-5"
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Tulis berita di sini..."
        modules={modules}
        formats={formats}
        style={{ height: "750px" }}
      />
    </div>
  );
};

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchCategories();
  }, []);

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
              {categories.map((category) => (
                <option key={category.id} value={category.slug}>
                  {category.title}
                </option>
              ))}
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
            <QuillEditor value={value} setValue={setValue} />
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
