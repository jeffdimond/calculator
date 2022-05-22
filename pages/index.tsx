import { NextPage } from 'next'
import {useState, useRef} from 'react';

const Home: NextPage = () => {
  const elText = useRef(null);

  const handleClick = event => {
    elText.current.value += event.currentTarget.value;
    console.log(elText.current.value);
  };

  return (
    <section className="section">
      <div className="container is-fluid has-text-centered is-clearfix">
        <div className="columns is-centered is-mobile is-vcentered is-one-third">
          <div className="column is-narrow">
            <div className="box is-responsive is-clearfix has-background-info is-light">
                <>
                  <p>
                    <input type="text" ref={elText} className="input mb-5" />
                  </p>
                  <p>
                    <div className="buttons are-medium">
                      <button className="button is-danger is-rounded">
                        AC
                      </button>
                      <button onClick={handleClick} value={'-'} className="button is-primary is-rounded">
                        +/-
                      </button>
                      <button onClick={handleClick} value={'%'} className="button is-primary is-rounded">
                        %
                      </button>
                      <button onClick={handleClick} value={'/'} className="button is-danger is-rounded">
                        /
                      </button>
                    </div>
                  </p>
                  <p>
                    <div className="buttons are-large">
                      <button onClick={handleClick} value={7} className="button is-primary is-rounded">
                        7
                      </button>
                      <button onClick={handleClick} value={8} className="button is-primary is-rounded">
                        8
                      </button>
                      <button onClick={handleClick} value={9} className="button is-primary is-rounded">
                        9
                      </button>
                      <button onClick={handleClick} value={'X'} className="button is-danger is-rounded">
                        X
                      </button>
                    </div>
                  </p>
                  <p>
                    <div className="buttons are-large">
                      <button onClick={handleClick} value={4} className="button is-primary is-rounded">
                        4
                      </button>
                      <button onClick={handleClick} value={5} className="button is-primary is-rounded">
                        5
                      </button>
                      <button onClick={handleClick} value={6} className="button is-primary is-rounded">
                        6
                      </button>
                      <button onClick={handleClick} value={'-'} className="button is-danger is-rounded">
                        -
                      </button>
                    </div>
                  </p>
                  <p>
                    <div className="buttons are-large">
                      <button onClick={handleClick} value={1} className="button is-primary is-rounded">
                        1
                      </button>
                      <button onClick={handleClick} value={2} className="button is-primary is-rounded">
                        2
                      </button>
                      <button onClick={handleClick} value={3} className="button is-primary is-rounded">
                        3
                      </button>
                      <button onClick={handleClick} value={'+'} className="button is-danger is-rounded">
                        +
                      </button>
                    </div>
                  </p>
                  <p>
                      <button onClick={handleClick} value={0} className="button is-primary is-rounded is-large is-pulled-left">
                        0
                      </button>
                      <button onClick={handleClick} value={'.'} className="button is-primary is-rounded is-large is-pulled-left">
                        .
                      </button>
                    <button onClick={handleClick} value={'='} className="button is-primary is-rounded is-danger is-large is-pulled-right">
                      =
                    </button>
                  </p>
                </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home
