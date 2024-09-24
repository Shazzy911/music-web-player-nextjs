import { sidebar_route_links } from "@/json/route_links";
import style from "./SideBar.module.scss";
import Link from "next/link";
import Logo from "@/components/ui/logo/Logo";
;
const SideBar = () => {
  return (
    <div className={style.container}>
      
      <Logo/>

      <div className={style.link_container}>
        {
          sidebar_route_links.map((item) => (
            <Link className={style.link} key={item.id} href={item.route} ><span>{item.icon}</span>{item.link}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default SideBar