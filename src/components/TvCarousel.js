import { Carousel } from 'react-bootstrap';

export default function TvCarousel() {
  const carousel = [
    {
      name: 'The Boys',
      description:
        'Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods.',
      imgUrl:
        'https://media.npr.org/assets/img/2020/09/02/thby_s2_unit_203_0509rc_wide-34993324edd72e64f41f3bcdbf9821476e581d83.jpg',
    },
    {
      name: 'the Witcher',
      description:
        'The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.',
      imgUrl:
        'https://www.futuregamereleases.com/wp-content/uploads/2020/10/Witcher.jpg',
    },
    {
      name: 'Dune',
      description:
        'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
      imgUrl: 'https://clownmagazine.co.uk/Dune%20-%20Film%20Poster.jpg',
    },
    {
      name: 'Alita Battle Angel',
      description:
        'Set several centuries in the future, the abandoned Alita is found in the scrapyard of Iron City by Ido, a compassionate cyber-doctor who takes the unconscious cyborg Alita to his clinic.',
      imgUrl:
        'https://m.media-amazon.com/images/S/aplus-media/vc/686cde11-f6b3-4130-8ec9-5d5fe174639a.__CR0,0,970,300_PT0_SX970_V1___.jpg',
    },
  ];

  return (
    <Carousel className="tv-carousal mb-5">
      {carousel.map((item) => (
        <Carousel.Item key={item.name}>
          <img className="d-block w-100" src={item.imgUrl} alt={item.name} />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
