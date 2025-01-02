import { useState } from 'react';

const Section = ({ title, description }) => {
   const [open, setOpen] = useState(false);

   return (
      <section className={open ? 'section open' : 'section'}>
         <button>toggle</button>
         <h3 className='sectionhead' onClick={() => setOpen(!open)}>
            {title}
         </h3>
         <div className='articlewrap'>
            <div className='article'>{description}</div>
         </div>
      </section>
   );
};

export default Section;
