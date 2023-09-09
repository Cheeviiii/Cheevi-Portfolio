export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-5">
      <p>&copy; {currentYear} - Portfolio. Todos os direitos reservados.</p>
    </footer>
  );
}
