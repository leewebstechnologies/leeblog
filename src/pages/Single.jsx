import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Bilal_Philips.jpg/220px-Bilal_Philips.jpg"
            alt=""
          />
          <div className="info">
            <span>Ali</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            cumque, eum iusto nulla quam neque harum doloribus. Iusto
            temporibus, libero est, deleniti molestiae mollitia voluptates quo
            commodi expedita natus atque! Mollitia, magnam voluptatum. Nostrum
            pariatur vitae iure facere distinctio eligendi, totam, laborum est
            asperiores, libero harum sapiente aut laboriosam reiciendis autem
            enim. A voluptatibus, aut porro ex harum quidem libero?
            <br />
            <br /> Sequi, voluptates, nesciunt, maxime aut cupiditate quos
            temporibus dolores dolore sit eveniet ipsam tenetur nemo? Similique
            facilis a porro tempore, atque, id odit, omnis aliquid suscipit
            optio quisquam nihil expedita! Sequi ex reprehenderit commodi
            numquam enim alias nobis corporis dolores nesciunt vitae nemo sed
            vero quasi veniam eius optio, laboriosam necessitatibus qui
            provident voluptatum iste minus quam animi! Blanditiis,
            perspiciatis.
            <br />
            <br /> Adipisci repudiandae quos numquam earum atque nam,
            cupiditate, eaque sequi voluptatem aliquam asperiores praesentium
            eligendi autem eum. Debitis quae voluptatem ut sint esse maxime
            harum a non, vitae id consequatur! Hic excepturi, accusamus eveniet
            explicabo vel in doloremque facilis exercitationem, vero, voluptates
            tempore qui? Recusandae, pariatur, amet animi expedita atque,
            adipisci deleniti et maxime consequatur asperiores beatae odio
            excepturi id! Dignissimos nulla quaerat eos laborum recusandae
            facere perspiciatis ducimus placeat provident eius totam nobis hic,
            modi sapiente adipisci quod ipsum optio quas necessitatibus. Libero
            omnis corrupti cum voluptas saepe nobis.
            <br />
            <br />
            Quibusdam exercitationem tempore consequuntur quam deleniti suscipit
            ut saepe, dolorem quasi dolores! Adipisci ex quas, quasi rerum enim
            molestias necessitatibus ipsam, possimus quidem cumque magnam ab
            incidunt harum dolorem distinctio! Consectetur a dolor labore. Modi
            sed perspiciatis hic temporibus culpa tempora non possimus,
            recusandae quas consequatur fugiat, voluptate impedit incidunt
            beatae necessitatibus corrupti quidem maxime ea sapiente officia
            odit. Voluptates. Quae rerum atque, et ducimus libero dicta natus
            labore laboriosam debitis fugiat sit amet nisi eum mollitia, tempora
            excepturi omnis, dolorem quidem magnam possimus ipsum? Laborum
            temporibus nemo quae tempore.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
