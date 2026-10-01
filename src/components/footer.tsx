export function Footer() {
  return (
    <footer className="site-footer">
      <span>Aakash Neupane</span>
      <span>Designer · Developer · Creator</span>
      <span>Nepal / © {new Date().getFullYear()}</span>
      <nav className="site-footer__links" aria-label="Social links">
        <a href="https://github.com/akkinyu2002" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/aakash-nyupane-4bb97031a" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:nyupaneaakash@gmail.com">Email</a>
      </nav>
    </footer>
  );
}
