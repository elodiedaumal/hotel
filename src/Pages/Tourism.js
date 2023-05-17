import CalendarComp from '../Components/Calendar';
import FotosTourism from '../Components/FotosTourism';
const margin = 'my-4 text-gray-800';
const Tourism = () => {
  return (
    <div className='text-center mx-auto max-w-5xl px-5 '>
      <div>
        <h2 className='text-4xl font-bold my-5'>
          Activités sur la Presqu'île de Crozon
        </h2>
        <h3 className='text-2xl my-5'>
          Le bout du monde...presqu'île de Crozon
        </h3>
        <p className={margin}>
          Au nord la rade de Brest, au sud la
          <strong> Baie de Douarnenez</strong>, à l'ouest c'est l'Amérique ! En
          <strong> presqu'île de Crozon-Morgat</strong>, on n'y passe pas, on y
          vient et on y reste !{' '}
          <strong>Rêve de pleine mer et de côtes sauvages? </strong>Le
          dépaysement total assuré!
        </p>
        <p className={margin}>
          Avec des <strong>plages de rêve</strong> pour la bronzette ou le{' '}
          <strong>surf</strong>, vous pourrez profiter d'activités multiples,
          visiter les <strong>grottes marines</strong>, arpenter les nombreux
          sentiers de randonnée (<strong>le fameux GR34</strong>) le long des
          falaises, faire du{' '}
          <strong>VTT, du paddle, de l'équitation... </strong>
          Vous trouverez des occupations pour petits et grands et{' '}
          <strong>quelque soit le temps</strong> (oui, oui!!!)
        </p>
        <p className={margin}>
          Aux portes de la <strong>presqu'île de Crozon</strong>: Brest et son
          port, <strong>Oceanopolis, Locronan</strong> cité de caractère,
          Quimper ville authentique, <strong>Camaret</strong> et sa chapelle, sa
          tour Vauban, <strong>Roscanvel</strong> et la pointe des espagnols,
          <strong>Landevennec</strong> et son musée de l'ancienne Abbaye,{' '}
          <strong>Argol et ses vieux métiers</strong>, sans oublier la plage de
          <strong> Pentrez avec son char à voile...</strong>
        </p>
        <p className={margin}>
          Et du sommet de <strong>Menez-Hom</strong>, dominez la vue incroyable
          sur le <strong>Cap de la chèvre</strong>, la baie de Douarnenez, la{' '}
          <strong>pointe Saint-Mathieu</strong> et la{' '}
          <strong>rade de Brest</strong>. Il est également le point de départ de
          <strong> sentiers de randonnée</strong>.
        </p>
      </div>
      <FotosTourism />
      <CalendarComp />
    </div>
  );
};

export default Tourism;
