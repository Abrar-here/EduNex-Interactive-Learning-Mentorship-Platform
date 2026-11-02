import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NotificationsDropdown from "./NotificationsDropdown";

const LINKS = {
  student: [
    { to: "/student", label: "Dashboard", end: true },
    { to: "/student/courses", label: "Browse courses" },
    { to: "/student/my-courses", label: "My courses" },
    { to: "/student/consultations", label: "Consultations" },
    { to: "/student/certificates", label: "Certificates" },
    { to: "/student/stats", label: "Learning stats" },
  ],
  instructor: [
    { to: "/instructor", label: "Dashboard", end: true },
    { to: "/instructor/create-course", label: "Create course" },
    { to: "/instructor/consultations/schedule", label: "Schedule" },
    { to: "/instructor/consultations/today", label: "Today's sessions" },
    { to: "/courses", label: "View as learner" },
  ],
  admin: [{ to: "/admin", label: "Dashboard", end: true }],
};

const homeFor = (role) =>
  role === "student"
    ? "/student"
    : role === "instructor"
      ? "/instructor"
      : role === "admin"
        ? "/admin"
        : "/";

export default function AppNavbar() {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const user = auth?.user;
  const role = user?.role;
  const links = LINKS[role] || [];
  const userName = user?.name || user?.fullName || "Account";
  const initial = userName.trim().charAt(0).toUpperCase();

  // Close menus when the page changes
  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click, close everything on Escape
  useEffect(() => {
    const onClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setProfileOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setProfileOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    `no-underline whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6"
        aria-label="Main"
      >
        {/* Logo */}
        <Link
          to={homeFor(role)}
          className="flex shrink-0 items-center gap-2 no-underline"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-bold text-white">
            E
          </span>
          <span className="text-xl font-bold text-slate-900">EduNex</span>
        </Link>

        {/* Desktop links (xl and up) */}
        <div className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-2">
          {!user ? (
            <>
              {location.pathname === "/" && (
                <>
                  <a
                    href="#features"
                    className="hidden rounded-full px-3 py-2 text-sm font-medium text-slate-600 no-underline hover:bg-slate-100 sm:inline"
                  >
                    Features
                  </a>
                  <a
                    href="#demo"
                    className="hidden rounded-full px-3 py-2 text-sm font-medium text-slate-600 no-underline hover:bg-slate-100 sm:inline"
                  >
                    Preview
                  </a>
                </>
              )}
              <Link
                to="/login"
                className="no-underline rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="no-underline rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              <NotificationsDropdown />

              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen((o) => !o)}
                  aria-haspopup="menu"
                  aria-expanded={profileOpen}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
                    {initial}
                  </span>
                  <span className="hidden max-w-[7rem] truncate text-sm font-medium text-slate-700 sm:inline">
                    {userName}
                  </span>
                  <span className="text-xs text-slate-500">▾</span>
                </button>

                {profileOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white py-1 shadow-xl shadow-slate-900/10"
                  >
                    <Link
                      to="/profile"
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-slate-700 no-underline hover:bg-slate-50"
                    >
                      My profile
                    </Link>
                    <div className="my-1 border-t border-slate-100" />
                    <button
                      role="menuitem"
                      onClick={handleLogout}
                      className="block w-full px-4 py-2.5 text-left text-sm text-rose-600 hover:bg-rose-50"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>

              {links.length > 1 && (
                <button
                  onClick={() => setMenuOpen((o) => !o)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-slate-700 hover:bg-slate-100 xl:hidden"
                >
                  {menuOpen ? "✕" : "☰"}
                </button>
              )}
            </>
          )}
        </div>
      </nav>

      {/* Mobile / tablet menu (below xl) */}
      {menuOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-4 pt-2 xl:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `${linkClass({ isActive })} py-3`}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
