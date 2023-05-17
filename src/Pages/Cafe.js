import buffet from '../Images/PDJ.jpg';
const title = 'text-xl uppercase font-bold text-teal-600';
const price = 'text-xl text-orange-800';

const Cafe = () => {
  return (
    <section className='max-w-5xl mx-auto items-center flex flex-col gap-10 mb-10'>
      <h1 className='text-4xl mt-10 flex flex-col gap-2 text-center'>
        Café de la Baie{' '}
        <span className='text-2xl'>
          Ouvert à tous tout les jours à partir de 8h.
        </span>
      </h1>

      <div className='text-md text-gray-600 flex flex-col gap-10 items-center justify-center px-5'>
        <div className='flex flex-col gap-5 lg:flex-row items-center  '>
          <div className='max-w-[400px]'>
            <img src={buffet} alt='buffet petit déjeuner' />
          </div>
          <div className='max-w-[600px] flex flex-col gap-2'>
            <h2 className={title}>Buffet Petit-déjeuner</h2>
            <p className={price}>15€</p>
            <div className='flex-col gap-1'>
              <p>
                Pour profiter pleinement de votre séjour nous vous proposons
                chaque matin <strong>un buffet continental</strong> au
                rez-de-chaussée de l’hôtel, dans notre salon de thé (pas de
                service en chambre).
              </p>
              <p>
                <strong>Servi entre 7h et 10h</strong> en semaine et le week-end
                entre 8h et 11h. Nous vous proposons un grand choix de produits
                frais et faits maison tels que{' '}
                <strong> des spécialités bretonnes,</strong> des gâteaux du
                jour, des oeufs, des salades de fruits, de la charcuterie, du
                fromage, des viennoiseries, un assortiment de pain, des
                croques-monsieur, des jus de fruits, des boissons chaudes…{' '}
                <strong>
                  {' '}
                  Tout cela face à la mer pour prolonger le plaisir et en
                  terrasse lors des beaux jours !
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row-reverse items-center  '>
          <div className='max-w-[400px]'>
            <img src={buffet} alt='buffet petit déjeuner' />
          </div>
          <div className='max-w-[600px]'>
            <h2 className={title}>Petit-déjeuner express</h2>

            <p className={price}>10€</p>
            <div className='flex-col gap-1'>
              <p>
                Tout comme la formule buffet, vous pouvez prendre votre
                petit-déjeuner au salon de thé{' '}
                <strong> entre 7h et 10h en semaine</strong> et le{' '}
                <strong>week-end entre 8h et 11h</strong> (pas de service en
                chambre).
              </p>
              <p>
                Il se présente sous forme de plateau comprenant un assortiment
                de pain et de viennoiserie, du beurre, de la confiture, un jus
                de fruit et une boisson chaude au choix, il est préparé par nos
                équipes lors de votre arrivée au petit-déjeuner. Lui aussi se
                déguste{' '}
                <strong>
                  {' '}
                  face à la mer et en terrasse lors des beaux jours !
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row items-center  '>
          <div className='max-w-[400px]'>
            <img src={buffet} alt='buffet petit déjeuner' />
          </div>
          <div className='max-w-[600px]'>
            <h2 className={title}>Plateaux repas</h2>
            <p className={price}>19€</p>
            <div className='flex-col gap-1'>
              <p>
                Tout au long de l’année, nous vous proposons{' '}
                <strong> des plateaux repas</strong> à consommer au
                rez-de-chaussée ou en chambre.
              </p>
              <p>
                Ils se composent{' '}
                <strong> d’un plat, d’un dessert et d’une boisson.</strong>
              </p>
              <p>
                Vous aurez le choix entre des quiches et des croques monsieurs
                faits maison accompagnés d’une salade de crudités ainsi qu’un
                dessert fait maison et notamment des{' '}
                <strong>spécialités bretonnes.</strong> Ils sont à commander la
                veille auprès de la réception qui vous donnera le menu afin de
                <strong> faire votre choix.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row-reverse items-center  '>
          <div className='max-w-[400px]'>
            <img src={buffet} alt='buffet petit déjeuner' />
          </div>
          <div className='max-w-[600px]'>
            <h2 className={title}>Bar, salon de thé et snack </h2>
            <p className={price}>de Juin à Septembre</p>
            <div className='flex-col gap-1'>
              <p>
                Venez déguster nos <strong>coupes glacées,</strong> crêpes,
                gâteaux maisons ou <strong> croque monsieur</strong> toute la
                journée. <strong> Vue sur la mer garanti.</strong> Nous
                proposons également des <strong> assiettes apéro</strong>{' '}
                (marine ou charcuterie) pour accompagner votre{' '}
                <strong>cidre ou bière bretonne.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className='text-2xl'> See our full menu</h2>
      <p>Image of the menu</p>
      <img src='' alt='' />
    </section>
  );
};

export default Cafe;
