import classes from './HowItWorks.module.css';

import searchImage from '../../assets/search.png';
import snookerTableImage from '../../assets/snooker-table.png';
import pencilImage from '../../assets/pencil.png';
import graphImage from '../../assets/graph.png';

import Card from '../UI/Card.js';

const HowItWorks = (props) => {
  return (
    <section className={classes.howitworks__container}>
        <h1>How It Works</h1>
        <div className={classes.steps}>
        <Card>
            <img src={searchImage} alt='Search icon'/>
            <p>Search for a routine</p>
        </Card>
        <Card>
            <img src={snookerTableImage} alt='Search icon'/>
            <p>Attempt your chosen routine</p>
        </Card>
        <Card>
            <img src={pencilImage} alt='Search icon'/>
            <p>Add your score here</p>
        </Card>
        <Card>
            <img src={graphImage} alt='Search icon'/>
            <p>Track your progress to see your improvement</p>
        </Card>
        </div>
    </section>
  );
};

export default HowItWorks;