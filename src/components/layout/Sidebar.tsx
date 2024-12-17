import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { FaHome, FaClock, FaThumbtack, FaBriefcase } from "react-icons/fa";

  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  const sidebarLinks = [
    {
      id: 1,
      label: "Home",
      href: "/",
      icon: FaHome,
    },
    {
      id: 2,
      label: "Recent",
      href: "/recent",
      icon: FaClock,
    },
    {
      id: 3,
      label: "Pinned",
      href: "/pinned",
      icon: FaThumbtack,
    },
    {
      id: 4,
      label: "My Work",
      href: "/my-work",
      icon: FaBriefcase,
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 border border-variant3 h-full bg-white">
        <div
          className={`p-2 bg-green-200 rounded-full flex items-center 
            ${open ? "justify-between" : "justify-center"}
          `}
        >
          <div className="flex items-center">{open && <ChevronDown />}</div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="mt-8 flex flex-col gap-5">
            {sidebarLinks.map((link) => (
              <SidebarLink
                key={link.id}
                link={{
                  label: link.label,
                  href: link.href,
                  icon: (
                    <link.icon
                      className={
                        pathname === link.href
                          ? "text-blue-500"
                          : "text-gray-600 group-hover:text-blue-500"
                      }
                    />
                  ),
                }}
                className={`text-primary p-3 rounded-md flex justify-center items-center group ${
                  open ? "w-full justify-start" : "max-w-max"
                } ${pathname === link.href ? "bg-blue-100" : ""}`}
                linkTextClassName={`${
                  pathname === link.href
                    ? "text-blue-500"
                    : "text-black hover:text-blue-500"
                }`}
              />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default DashboardSidebar;
