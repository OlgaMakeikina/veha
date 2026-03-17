import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './FooterComponent/footer';

const NotFoundPage = () => {
  return (
    <div>
      <div style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: '"Roboto", sans-serif',
      }}>
        <div style={{
          fontSize: "120px",
          fontWeight: "700",
          color: "#4281ab",
          lineHeight: 1,
          marginBottom: "16px",
        }}>
          404
        </div>

        <div style={{
          width: "80px",
          height: "4px",
          backgroundColor: "#1a9e3b",
          margin: "0 auto 24px",
          borderRadius: "2px",
        }} />

        <p style={{
          fontSize: "26px",
          fontWeight: "500",
          color: "#0b1f33",
          marginBottom: "12px",
        }}>
          Страница не найдена
        </p>

        <p style={{
          fontSize: "16px",
          color: "#555",
          fontWeight: "300",
          marginBottom: "40px",
          maxWidth: "420px",
        }}>
          Возможно, страница была перемещена или удалена. Вернитесь на главную страницу.
        </p>

        <Link to="/" style={{
          display: "inline-block",
          padding: "14px 36px",
          backgroundColor: "#4281ab",
          color: "#fff",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "4px",
          transition: "opacity 0.2s",
        }}
          onMouseOver={e => e.currentTarget.style.opacity = "0.85"}
          onMouseOut={e => e.currentTarget.style.opacity = "1"}
        >
          На главную
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
