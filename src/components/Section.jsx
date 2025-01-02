import { useState } from 'react';

const Section = ({ title, description }) => {
   const [open, setOpen] = useState(true);

   let className = 'section';
   if (open) {
      className += ' open';
   }

   return (
      <section className={className}>
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
