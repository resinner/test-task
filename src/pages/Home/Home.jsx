import { Triangle } from 'react-loader-spinner';
import { Spinner } from './Home.styled';


const Home = () => {

  return (
    <section>
      <Spinner>
        <Triangle
          height="280"
          width="280"
          color="blueviolet"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </Spinner>
    </section>
  );
};

export default Home;
