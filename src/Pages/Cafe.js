const Cafe = () => {
  return (
    <section className='max-w-4xl text-center mx-auto items-center flex flex-col gap-10 mb-10'>
      <h1 className='text-4xl mt-10'>Café de la Baie</h1>
      <p className='font-medium'>
        Le Café de l'Hôtel de la Baie propose chaque jour un petit-déjeuner
        servi sous forme de buffet avec des produits locaux et variés. Notre
        salon de thé est ouvert à tous et vous pourrez aussi y déguster des thés
        & cafés du monde ainsi que des gâteaux et douceurs faits maison.
      </p>
      <h2 className='font-bold text-2xl'>
        Nous proposons des plateaux repas sur demande à l'avance durant toute
        l'année.
      </h2>
      <div className='grid grid-cols-3 gap-5'>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold'>Petits-déjeuners</h2>
          <p>
            Le petit-déjeuner est servi de 07h00 à 10h30 en semaine et de 08h00
            à 11h le week-end. Salé/sucré, il y en a pour tous les goûts, vous y
            trouverez un large choix de tartes, gâteaux, quiches etc.. le tout
            fait maison!
          </p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold'>Petite restauration</h2>
          <h3>Le midi, durant l'été</h3>
          <p>
            Venez profiter de notre belle terrasse ensoleillée avec vue sur la
            Baie de Douarnenez. Bières, glaces, boissons fraîches et petite
            restauration, la vie est douce en presqu'île!
          </p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold'>Salon de thé</h2>
          <p>
            Notre salon de thé est ouvert toute l'année et vous propose thés,
            cafés ou autres boisson fraiche ainsi que des pâtisseries bretonnes
            faites maison.
          </p>
        </div>
      </div>
      <h2 className='text-2xl'> See our menu</h2>
    </section>
  );
};

export default Cafe;
