import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import {
  Bars3BottomLeftIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Logo from "assets/logo.png";
import { Item } from "./item";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation().pathname;
  const navigation = [
    {
      name: "Overview",
      href: "/overview",
      icon: HomeIcon,
      current: location === "/",
    },
    {
      name: "Models",
      href: "/models",
      icon: UsersIcon,
      current: location === "/models",
    },
    {
      name: "Twins",
      href: "/twins",
      icon: FolderIcon,
      current: location === "/twins",
    },
    {
      name: "Design",
      href: "/design",
      icon: CalendarIcon,
      current: location === "/design",
    },
    {
      name: "Scenario",
      href: "/scenario",
      icon: InboxIcon,
      current: location === "/scenario",
    },
  ];
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img className="h-8 w-auto" src={Logo} alt="Your Company" />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <Item item={item} key={item.name} />
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-white">
            <div className="flex h-16 justify-center items-center bg-white px-4 mt-4">
              <img className="h-40 w-auto" src={Logo} alt="Your Company" />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <Item item={item} />
                ))}
              </nav>
            </div>
            <div className="p-2">
              <div className="border-t border-brand-light opacity-10 m-3" />
              <Item
                item={{
                  isSmall: true,
                  name: "Profile",
                  href: "/profile",
                  icon: UserCircleIcon,
                  current: location === "/profile",
                }}
              />
              <Item
                item={{
                  isSmall: true,
                  name: "Settings",
                  href: "/settings",
                  icon: Cog6ToothIcon,
                  current: location === "/settings",
                }}
              />
              <Item
                item={{
                  isSmall: true,
                  name: "Logout",
                  href: "/logout",
                  icon: ArrowLeftOnRectangleIcon,
                  current: location === "/logout",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:pl-64">
          <div className="sticky top-0 z-10  h-16 flex-shrink-0 md:hidden flex ">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="flex-1">
            <div className="w-full">
              <div className="bg-gray-100">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
