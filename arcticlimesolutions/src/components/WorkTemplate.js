import React from 'react';
import "../css/worktemplate.min.css";
import HeaderAlt from "../components/HeaderAlt";
import FooterAlt from './FooterAlt';
import { motion } from "framer-motion";

const WorkTemplate = () => {
  return (
    <>
      <HeaderAlt />
      <motion.section className="workarea"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacitiy: 0}}>
        <section className="workdescr scrollbar">
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, architecto. Ipsam impedit sunt possimus autem totam, libero ratione incidunt quos ducimus nihil veniam sed facilis. Culpa quos sit sapiente alias?
            Harum facere adipisci dicta, debitis officiis sed praesentium voluptas facilis eius quibusdam ut rerum excepturi nemo similique quo optio numquam impedit et mollitia in eveniet, architecto aspernatur. Eos, praesentium id.
            Rerum sed veritatis id dolorem minus? Ipsam provident minima excepturi fuga fugiat labore, placeat sit. Sed placeat consectetur officia consequuntur voluptatibus? Eligendi explicabo minus, autem aliquam modi rerum. Saepe, dignissimos.
            Esse, quas id eum, omnis debitis impedit repellendus, magni sint laboriosam iusto deserunt recusandae? Sapiente cum necessitatibus eveniet iure culpa dignissimos consequatur dolor, labore expedita modi voluptates quae illum distinctio.
            Praesentium illum ut odit. Dicta, modi vero? Porro totam, nisi natus quisquam culpa eius aut sint impedit, perspiciatis distinctio incidunt reiciendis eaque consectetur animi error obcaecati recusandae? Fugiat, ipsum. Commodi.
            Magni esse obcaecati id enim et, quia dolorem eveniet ad cumque magnam quo necessitatibus nemo reiciendis repellat adipisci reprehenderit debitis omnis libero quaerat consequuntur voluptates corrupti sapiente? Fugit, quidem adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quisquam laudantium, eos dolore nam corporis consectetur! Odit inventore dolorum quos, labore magnam in tenetur deleniti sit, laudantium neque, quam ullam.
            Provident veniam inventore ut harum veritatis fuga. Delectus quas placeat a deleniti fuga illo voluptatibus iure vel voluptatem ducimus. Autem officiis minima, architecto neque cumque pariatur velit molestias maiores modi!
            Tenetur aut porro dolore repellendus dolorum necessitatibus laudantium? Quibusdam veritatis qui est id delectus error, perspiciatis odit commodi laudantium! Rem nihil voluptatum exercitationem ab, inventore iure qui sed commodi omnis?
            Similique magnam veritatis, impedit excepturi dolores sed dicta libero velit et dolor facilis earum quae sapiente ea laborum eius quos aspernatur ipsum recusandae cumque! Officiis reiciendis sequi molestias mollitia. Animi!
            Accusamus fugiat esse labore magni repellendus? Recusandae, numquam, explicabo dicta omnis molestiae quos quis earum excepturi, delectus porro nesciunt. Possimus vel aperiam, at ducimus iste rem dignissimos et molestiae! Recusandae.
            Sed debitis dolore quo possimus ab, cupiditate eos beatae architecto, fugit unde odio itaque ipsum ipsa sit obcaecati hic. In temporibus aliquid numquam eveniet a aspernatur quaerat eos! Natus, recusandae?
            Culpa cumque animi praesentium qui perspiciatis ad, asperiores minus alias velit repellendus accusamus fuga. At, voluptatibus rerum harum voluptas explicabo atque est sequi error, omnis, velit magni aspernatur nam animi.
            Quisquam dolor asperiores voluptatum quibusdam officia quidem corporis quod accusamus voluptates nostrum. Est provident dolorem alias minus quisquam recusandae blanditiis, maxime cum ducimus consectetur, iusto magni molestias expedita ut iste?
            Vitae ipsam itaque nobis voluptas eaque qui. Eius dolorem nulla commodi, error, magni dolore harum, atque in a veniam voluptate! Porro, laboriosam sunt optio iusto exercitationem dolor temporibus ad tenetur.
            Asperiores velit tenetur neque dignissimos laboriosam. Ullam beatae praesentium vel minima quis assumenda hic provident soluta cupiditate, optio temporibus obcaecati mollitia vitae accusantium? Consectetur sunt dolore earum quibusdam error vero.
           .</article>
        </section>
        <section className="clientinfo">
            <p className="clientname">CLIENT<br></br>NAME</p>
        </section>
      </motion.section>
      <FooterAlt selectedID={3} />
    </>
  );
}

export default WorkTemplate