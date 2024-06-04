"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DataTable from 'react-data-table-component';

const ArticlePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk memuat artikel dari API
  const fetchArticles = async () => {
    try {
      const res = await fetch("/api/posts/list");
      const data = await res.json();
      setArticles(data.posts);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleEdit = (id) => {
    router.push(`/bj-admin/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this article? This action cannot be undone.");

    if (confirmation) {
      console.log("Deleting article with id:", id);

      try {
        const response = await fetch(`/api/posts/edit/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          alert("Article deleted successfully!");
          // Muat ulang artikel setelah penghapusan berhasil
          fetchArticles();
        } else {
          const result = await response.json();
          alert(`Failed to delete article: ${result.message}`);
        }
      } catch (error) {
        console.error("Error deleting article:", error);
        alert("Something went wrong while deleting the article. Please try again later.");
      }
    } else {
      console.log("Delete action cancelled.");
    }
  };

  const columns = [
    { name: 'Judul', selector: row => row.title, sortable: true },
    { name: 'Kategori', selector: row => row.catSlug, sortable: true },
    { name: 'Tanggal Publish', selector: row => new Date(row.createdAt).toLocaleDateString(), sortable: true },
    { name: 'Pengunjung', selector: row => row.views, sortable: true },
    {
      name: 'Actions',
      cell: row => (
        <div className="d-flex">
          <button
            className="btn btn-sm btn-primary mr-2"
            onClick={() => handleEdit(row.id)}
            title="Edit Article"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="btn btn-sm btn-danger mr-2"
            onClick={() => handleDelete(row.id)}
            title="Delete Article"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            className="btn btn-sm btn-info"
            onClick={() => router.push(`/posts/${row.slug}`)}
            title="View Article"
          >
            <i className="fas fa-eye"></i>
          </button>
        </div>
      ),
    },
  ];

  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h3>List of Articles</h3>
            <button
              className="btn btn-success"
              onClick={() => router.push("/bj-admin/write")}
              title="Write New Article"
            >
              <i className="fas fa-plus"></i> Write New
            </button>
          </div>
        </div>
        <div className="card-body">
          <DataTable
            columns={columns}
            data={articles}
            progressPending={loading}
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
