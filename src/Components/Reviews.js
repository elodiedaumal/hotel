import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import seaview from '../Images/seaview.jpg';

const Reviews = () => {
  return (
    <section className='mb-20 mx-auto max-w-5xl mt-10 text-lg px-2 '>
      <h2 className='font-bold text-3xl text-black mb-10 justify-center items-center gap-5  flex '>
        <span className='flex text-teal-600 text-sm'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        Reviews
        <span className='flex text-teal-600 text-sm'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
      </h2>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div className='flex flex-col gap-2 items-center'>
          <h4 className='text-2xl font-bold '> Un accueil chaleureux ! </h4>
          <p>
            Nous espérons que vous Trouverez une offre qui correspond à vos
            besoins et de choisir de rester avec nous. Si vous avez des
            questions, n’hésitez pas à nous contacter.
          </p>
          <p className='font-manual font-bold text-2xl self-end'>
            Catherine, Stephane and the hotel de la baie's team
          </p>
          <img className='max-w-md' src={seaview} alt='room with sea view' />
        </div>

        <div
          className='flex flex-col gap-10 
        '
        >
          <article>
            <h3 className='font-bold text-gray-800 flex justify-between items-center gap-5 mb-3'>
              Superbe hôtel
              <span className='flex text-yellow-400 text-sm'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </h3>
            <p className='text-sm'>
              Accueil chaleureux. La literie est de très bonne qualité. Chambres
              avec vue sur mer magnifique. Super petit déjeuner, énormément de
              choix et le personnel est à l’écoute des clients. Je recommande
              vivement cet hôtel 3 étoiles.
            </p>
          </article>
          <article>
            <h3 className='font-bold text-gray-800 flex justify-between items-center gap-5 leading-5 mb-3'>
              Hôtel très bien situé face à la mer à Morgat presqu'île de Crozon
              <span className='flex text-yellow-400 text-sm'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </h3>
            <p className='text-sm'>
              On a passé un très bon moment! Chambre très agréable avec une vue
              magnifique et un petit déjeuné royal ! merci pour votre
              gentillesse !
            </p>
          </article>
          <article>
            <h3 className='font-bold text-gray-800 flex justify-between items-center gap-5 leading-5 mb-3'>
              Situation idéale en bordure de la plage, des restaurants et des
              commerces
              <span className='flex text-yellow-400 text-sm'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </h3>
            <p className='text-sm'>
              Accueil chaleureux et prévenant du personnel, excellent petit
              déjeuner. chambre petite mais bien agencée. Bonne literie. Parfait
              pour un hôtel 3 étoiles
            </p>
          </article>
          <article>
            <h3 className='font-bold text-gray-800 flex justify-between items-center gap-5 leading-5 mb-3'>
              A great location and a nice little hotel.
              <span className='flex text-yellow-400 text-sm'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
            </h3>
            <p className='text-sm'>
              The decoration of the ground floor and exterior is very nice. The
              breakfast was great with a good assortment of local cakes, all
              very tasty. The staff was very helpful and nice.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
