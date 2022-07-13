import { withRouter } from "next/router";

const ActiveLink = ({ router, href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          fontWeight: isCurrentPath ? "font-bold" : "normal",
          color: isCurrentPath ? "rebeccapurple" : "#fff",
        }}
      >
          {children}
      </a>
    </div>
  );
};
export default withRouter(ActiveLink);
