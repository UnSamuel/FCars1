// BlogPage.js
import React from 'react';
import BlogPostPreview from '../../molecules/BlogPostPreview/BlogPostPreview';
import './BlogPage.css'; // Importar estilos

const BlogPage = ({ posts }) => {
  return (
    <div className="blog-page">
      <h2 className="page-title">Últimas Publicaciones</h2>
      <div className="blog-posts">
        {posts.map((post) => (
          <BlogPostPreview
            key={post.id}
            title={post.title}
            summary={post.summary}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
