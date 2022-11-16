import { React, Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const planetList = planets.map(({ name, image }) => (
      <PlanetCard
        planetName={ name }
        planetImage={ image }
        key={ name }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {planetList}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
