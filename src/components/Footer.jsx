export default function Footer() {
  return (
    <div className="w-full bottom-0 bg-[#DEE5D4]">
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}
