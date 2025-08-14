import Logo from ".assets/logo.svg";
import feed from ".assets/feed.svg";
import perfil from ".assets/perfil.svg";
import sobreNos from ".assets/info.svg";
import logout from ".assets/logout.svg";
export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="logo do codeconnect" />
      <nav>
        <ul>
            <li>
                <a href="#">Publicar</a>
            </li>
            <li>
                <a href="#">
                    <img src={feed} alt="" />
                    <span>Feed</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={perfil} alt="" />
                    <span>Perfil</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={sobreNos} alt="" />
                    <span>Sobre Nós</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={logout} alt="" />
                    <span>Sair</span>
                </a>
            </li>
        </ul>
      </nav>
    </aside>
  );
}
