import { useRouter } from "next/navigation";
import React from "react";
interface ListItemProps {
  image: string;
  name: string;
  href: string;
}
const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = ()=>{
    // add authontication before push
    router.push(href);
  }
  return <div>ListItem</div>;
};

export default ListItem;
