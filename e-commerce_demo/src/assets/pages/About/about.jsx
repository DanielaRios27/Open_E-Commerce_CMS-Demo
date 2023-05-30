import React, { useEffect } from 'react';

import Styles from './about.module.css'

function About(){
    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView();
          }
        }
      }, []);
      
    return (
        <>
        <div className={Styles.about}>
            <h1>About</h1>
            <section id="ourhistory">
            <h2>Our History</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur saepe rerum exercitationem libero dicta, est dolores pariatur. Nobis, enim impedit officiis placeat eligendi id rerum voluptatem commodi. Non, nesciunt ratione.
                Dolore, quo optio deserunt ea ad, neque laudantium corporis earum provident nisi possimus sit exercitationem. Ullam impedit obcaecati nesciunt deleniti, iusto mollitia, eius quod sapiente fugit, explicabo deserunt itaque saepe.
                Beatae reprehenderit voluptas placeat ratione enim voluptatem culpa accusamus, sint provident adipisci obcaecati nemo officia perferendis. Doloribus placeat ab possimus officia facilis ad inventore, voluptatem cum, veritatis reiciendis temporibus voluptatum.
                Quas quam excepturi libero hic facilis incidunt. Ipsa ducimus eum tempore perspiciatis quaerat explicabo. Quos nemo consequatur, repellendus, earum, iusto non porro minus illum iste aliquam ullam saepe vitae asperiores!
                Repudiandae, iusto odio dolorum ipsa omnis aliquam impedit ratione debitis, blanditiis quidem dolore iure tempora aliquid? Rem amet id natus hic quia explicabo sint nihil, ipsam harum non rerum sit.
                Neque libero repudiandae quidem deleniti voluptatem, repellat quam ducimus tempore corrupti alias velit! Nostrum, natus beatae rerum repellat dignissimos, nesciunt dolorem consequatur suscipit ex ea tempore blanditiis deleniti, aperiam excepturi?
                Eum minima repellat nostrum culpa autem unde consequatur tempore pariatur cumque nemo reiciendis quas adipisci beatae animi consequuntur libero aspernatur atque cupiditate accusantium nobis, deleniti obcaecati inventore, similique amet. Ab.
                Ut officia pariatur officiis sint enim delectus quaerat fugiat suscipit qui? Odit, harum. Tenetur dolorem labore facere incidunt, blanditiis rem fuga molestias alias, delectus sapiente repellat animi soluta esse. Qui?
                Consectetur animi quae molestias ullam excepturi ratione unde adipisci nam omnis voluptatibus mollitia eum iste minus cumque, dolorum ex magnam dolore doloribus impedit maiores, nisi corrupti enim quia reprehenderit. Autem!
                Dignissimos iusto a, tempora suscipit nesciunt sapiente, nam natus reiciendis soluta est aliquid odit explicabo nostrum et, nisi quo asperiores alias optio veniam accusamus nihil exercitationem odio? Praesentium, sit eos?</p>
            </section>
            <section id="ourteam">
            <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur saepe rerum exercitationem libero dicta, est dolores pariatur. Nobis, enim impedit officiis placeat eligendi id rerum voluptatem commodi. Non, nesciunt ratione.
                Dolore, quo optio deserunt ea ad, neque laudantium corporis earum provident nisi possimus sit exercitationem. Ullam impedit obcaecati nesciunt deleniti, iusto mollitia, eius quod sapiente fugit, explicabo deserunt itaque saepe.
                Beatae reprehenderit voluptas placeat ratione enim voluptatem culpa accusamus, sint provident adipisci obcaecati nemo officia perferendis. Doloribus placeat ab possimus officia facilis ad inventore, voluptatem cum, veritatis reiciendis temporibus voluptatum.
                Quas quam excepturi libero hic facilis incidunt. Ipsa ducimus eum tempore perspiciatis quaerat explicabo. Quos nemo consequatur, repellendus, earum, iusto non porro minus illum iste aliquam ullam saepe vitae asperiores!
                Repudiandae, iusto odio dolorum ipsa omnis aliquam impedit ratione debitis, blanditiis quidem dolore iure tempora aliquid? Rem amet id natus hic quia explicabo sint nihil, ipsam harum non rerum sit.
                Neque libero repudiandae quidem deleniti voluptatem, repellat quam ducimus tempore corrupti alias velit! Nostrum, natus beatae rerum repellat dignissimos, nesciunt dolorem consequatur suscipit ex ea tempore blanditiis deleniti, aperiam excepturi?
                Eum minima repellat nostrum culpa autem unde consequatur tempore pariatur cumque nemo reiciendis quas adipisci beatae animi consequuntur libero aspernatur atque cupiditate accusantium nobis, deleniti obcaecati inventore, similique amet. Ab.
                Ut officia pariatur officiis sint enim delectus quaerat fugiat suscipit qui? Odit, harum. Tenetur dolorem labore facere incidunt, blanditiis rem fuga molestias alias, delectus sapiente repellat animi soluta esse. Qui?
                Consectetur animi quae molestias ullam excepturi ratione unde adipisci nam omnis voluptatibus mollitia eum iste minus cumque, dolorum ex magnam dolore doloribus impedit maiores, nisi corrupti enim quia reprehenderit. Autem!
                Dignissimos iusto a, tempora suscipit nesciunt sapiente, nam natus reiciendis soluta est aliquid odit explicabo nostrum et, nisi quo asperiores alias optio veniam accusamus nihil exercitationem odio? Praesentium, sit eos?</p>
            </section>
            <section id="ourlocation">
            <h2>Our Location</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur saepe rerum exercitationem libero dicta, est dolores pariatur. Nobis, enim impedit officiis placeat eligendi id rerum voluptatem commodi. Non, nesciunt ratione.
                Dolore, quo optio deserunt ea ad, neque laudantium corporis earum provident nisi possimus sit exercitationem. Ullam impedit obcaecati nesciunt deleniti, iusto mollitia, eius quod sapiente fugit, explicabo deserunt itaque saepe.
                Beatae reprehenderit voluptas placeat ratione enim voluptatem culpa accusamus, sint provident adipisci obcaecati nemo officia perferendis. Doloribus placeat ab possimus officia facilis ad inventore, voluptatem cum, veritatis reiciendis temporibus voluptatum.
                Quas quam excepturi libero hic facilis incidunt. Ipsa ducimus eum tempore perspiciatis quaerat explicabo. Quos nemo consequatur, repellendus, earum, iusto non porro minus illum iste aliquam ullam saepe vitae asperiores!
                Repudiandae, iusto odio dolorum ipsa omnis aliquam impedit ratione debitis, blanditiis quidem dolore iure tempora aliquid? Rem amet id natus hic quia explicabo sint nihil, ipsam harum non rerum sit.
                Neque libero repudiandae quidem deleniti voluptatem, repellat quam ducimus tempore corrupti alias velit! Nostrum, natus beatae rerum repellat dignissimos, nesciunt dolorem consequatur suscipit ex ea tempore blanditiis deleniti, aperiam excepturi?
                Eum minima repellat nostrum culpa autem unde consequatur tempore pariatur cumque nemo reiciendis quas adipisci beatae animi consequuntur libero aspernatur atque cupiditate accusantium nobis, deleniti obcaecati inventore, similique amet. Ab.
                Ut officia pariatur officiis sint enim delectus quaerat fugiat suscipit qui? Odit, harum. Tenetur dolorem labore facere incidunt, blanditiis rem fuga molestias alias, delectus sapiente repellat animi soluta esse. Qui?
                Consectetur animi quae molestias ullam excepturi ratione unde adipisci nam omnis voluptatibus mollitia eum iste minus cumque, dolorum ex magnam dolore doloribus impedit maiores, nisi corrupti enim quia reprehenderit. Autem!
                Dignissimos iusto a, tempora suscipit nesciunt sapiente, nam natus reiciendis soluta est aliquid odit explicabo nostrum et, nisi quo asperiores alias optio veniam accusamus nihil exercitationem odio? Praesentium, sit eos?</p>
            </section>
        </div>
            
        </>
    )
};

export default About;