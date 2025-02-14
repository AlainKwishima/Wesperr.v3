import {
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  UsersIcon,

  UserGroupIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

export const navLinks = [
  {
    value: "/chats",
    icon: <ChatBubbleBottomCenterTextIcon className="size-6 md:size-5" />,
    title: "Chats",
  },
  {
    value: "/users",
    icon: <UsersIcon className="size-6 md:size-5" />,
    title: "Users",
  },
  {
    value: "/wallet",
    icon: <WalletIcon className="size-6 md:size-5" />,
    title: "Wallet",
  },
  {
    value: "/settings",
    icon: <Cog6ToothIcon className="size-6 md:size-5" />,
    title: "Settings",
  },
];
