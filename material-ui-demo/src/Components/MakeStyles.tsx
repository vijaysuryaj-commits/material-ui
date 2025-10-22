// import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    margin: '0px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '1000px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.3)',
    padding: '20px',
    margin: 'auto',
  },
  heading: {
    fontSize: '30px',
    fontFamily: 'Times New Roman',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: '12px',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '20px',
  },
});

const MakeStyles = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Container</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          At quidem earum rerum ullam ipsum, quas eius placeat rem laudantium,
          eos possimus cupiditate? Non nemo aliquam cumque quas,
          soluta voluptatum repudiandae ab? Iure beatae atque assumenda expedita molestiae eius,
          ab distinctio reprehenderit recusandae quis,
          minus quod dolore quae omnis tempore,
          aliquid incidunt ipsum officia voluptatibus exercitationem minima alias.
          Hic quidem aperiam neque quas, eaque facilis mollitia nemo maxime,
          voluptatem nobis fuga aut earum iste blanditiis. Eligendi iste expedita assumenda voluptas rerum nemo natus quia nobis blanditiis vitae, recusandae autem, quod sapiente. Pariatur voluptate assumenda non, reprehenderit corrupti animi. Quaerat tempore, deserunt suscipit expedita, voluptatibus eum consequuntur nostrum dolorum nihil libero culpa nobis labore numquam officia praesentium. Explicabo cumque autem dolorum eos, nam maiores voluptas officiis ipsa molestias, numquam cupiditate iure blanditiis beatae mollitia assumenda, ex dolore eligendi deleniti. Quam nesciunt, vitae voluptate iusto magnam dolorem est, libero fugiat obcaecati facilis recusandae vel. Id illo officia repudiandae? Sed quia amet et aut sint fugiat quam soluta cum facilis necessitatibus quis quod corrupti incidunt, illo suscipit ab iure rem! Nisi, quod sunt! Maiores non odit aperiam libero quas. Animi eos cum minima non veritatis, quia voluptatibus soluta natus consequuntur corrupti quod autem repellendus nesciunt illo neque facilis? Molestias quod pariatur dicta! Repellendus itaque quas incidunt et maiores temporibus, adipisci nostrum fuga maxime vitae rem, neque enim labore voluptatum ut quia recusandae, similique odit ullam ratione tempore iusto. Delectus quo dolores iusto, assumenda necessitatibus ad voluptate, officiis vero earum repellat optio possimus eius. Ipsam adipisci enim, obcaecati eaque necessitatibus saepe culpa reprehenderit repellendus? Expedita ex quisquam inventore adipisci, ipsam quasi consequuntur nostrum rerum? Totam illo qui ullam obcaecati sequi voluptatem quisquam repellat in, officia, iure tempora quas. Ea incidunt, consectetur fugiat doloribus deserunt expedita maiores aperiam? Magni repellat quia accusantium doloribus pariatur autem incidunt.</p>
        <button className={classes.button}>Click Me</button>
      </div>
    </div>
  );
};

export default MakeStyles;
