import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";

type IProps = {
  item: any;
};

const SidebarItem = ({ item }: IProps) => {
  const linkPath = `/dashboard${item.path}`;
  const pathname = usePathname();

  console.log(linkPath);
  console.log(pathname);

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                borderRight: "3px solid #ffffff",
                "& svg": {
                  color: "#ffffff",
                },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
