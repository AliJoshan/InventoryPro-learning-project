const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} InventoryPro. Built with React & Express.
    </footer>
  );
};

export default Footer;
