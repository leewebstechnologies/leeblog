import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";

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
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ipsum reiciendis adipisci in aliquam? Est facilis dolore illum aperiam
          eaque itaque eius nobis voluptates fuga? Quaerat, eaque labore! Eaque,
          laudantium. Quas provident soluta quos modi, dolore aut, tenetur sunt
          eum eius odit eveniet enim beatae quae nobis odio repellat id velit
          vero quod dicta impedit. Harum possimus omnis alias ratione. Delectus,
          pariatur esse. Quaerat nam fuga quae ab iure nisi ipsa velit labore
          voluptates, itaque voluptas iusto ullam doloribus dignissimos numquam,
          repellendus alias praesentium expedita cupiditate. Reiciendis delectus
          dolore architecto! A repudiandae ea, unde porro fugiat rem repellat
          eius error officia odio reiciendis sint. Quibusdam perferendis,
          dolorem cum, alias placeat doloremque distinctio eligendi nemo officia
          sequi similique itaque sit dolores! Ratione repellendus accusamus
          facere, maxime nisi officia quod fuga minus, voluptatem ducimus
          similique repudiandae perspiciatis, corporis reprehenderit modi in non
          sapiente veritatis perferendis odit? Veniam illum consectetur unde
          consequatur quibusdam. Temporibus fuga asperiores, sed doloribus
          dignissimos neque dolorem ad dicta delectus vero autem debitis aliquam
          saepe aut repellendus consectetur, quibusdam voluptatibus labore ea!
          Voluptatum ipsa alias iure ad esse odio? Voluptas tempora amet quasi
          aliquid natus sequi, maxime, nihil consequuntur facilis omnis ut
          magnam cumque iste tempore. Autem assumenda, facere officia deleniti
          sed, tenetur accusamus, aspernatur quis dolores ipsum nam! Est aliquam
          officia odio, accusantium saepe fugit culpa error. Cupiditate non,
          voluptatibus dicta placeat quam nihil iure iusto illo at, perspiciatis
          similique quia fugiat ea ad, qui magnam quidem officiis. Ipsa earum
          quasi natus, repudiandae deserunt possimus ducimus! Laudantium maiores
          quibusdam iusto fuga ratione quos recusandae labore eaque nihil.
          Libero minus sint praesentium cumque voluptatum odit quam fugiat
          deleniti maiores. Minus ullam delectus numquam nulla cum hic dolorum
          magni in pariatur repellendus esse impedit fugit aliquid animi
          quisquam harum, dolore sunt placeat quas dolor? Est tempora omnis
          necessitatibus placeat ducimus!
        </h1>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
