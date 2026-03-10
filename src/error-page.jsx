import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: '"Roboto", sans-serif',
      backgroundColor: "#f5f7fa",
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: "#4281ab",
        padding: "14px 32px",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        letterSpacing: "0.5px",
      }}>
        ООО УК «ВЕХА»
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: "120px",
          fontWeight: "700",
          color: "#4281ab",
          lineHeight: 1,
          marginBottom: "16px",
        }}>
          {error?.status || "404"}
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

      {/* Footer */}
      <div style={{
        backgroundColor: "#4281ab",
        color: "#fff",
        textAlign: "center",
        padding: "16px",
        fontSize: "13px",
        fontWeight: "300",
      }}>
        <p>Copyright © {new Date().getFullYear()}. ООО Управляющая компания «ВЕХА» (<a href="https://ooovexa.ru/" style={{ color: "#fff" }}>https://ooovexa.ru/</a>)</p>
        <p>© 2011-{new Date().getFullYear()} Разработка сайта, поддержка и хостинг — <a href="https://hhivp.com/" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>ООО «АйТи Решения»</a></p>
      </div>
    </div>
  );
}
