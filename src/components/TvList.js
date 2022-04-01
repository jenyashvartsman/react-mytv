import { useState } from 'react';
import {
  FormControl,
  InputGroup,
  Button,
  Card,
  Row,
  Col,
} from 'react-bootstrap';

export default function TvList() {
  const list = [
    {
      name: 'Matrix',
      url: 'https://www.imdb.com/title/tt0133093/',
      imgUrl:
        'https://www.themoviedb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    },
    {
      name: 'The wolf of wall street',
      url: 'https://www.imdb.com/title/tt0133093/',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg',
    },
    {
      name: 'Justice league snyder cut',
      url: 'https://www.imdb.com/title/tt12361974/',
      imgUrl: 'https://i.imgur.com/6rQNI22.jpg',
    },
    {
      name: 'Avengers: Endgame',
      url: 'https://www.imdb.com/title/tt4154796/',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
    },
    {
      name: 'The Unbearable Weight of Massive Talent',
      url: 'https://www.imdb.com/title/tt11291274/',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BNDM2ODNiMWItOWRkNS00ODE3LWE2OGYtNTZkMDJkOWI1ODMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg',
    },
  ];

  const [search, setSearch] = useState('');
  const [tvList, setTvList] = useState(list);

  const filter = (e) => {
    const keyword = e.target.value;
    setTvList(
      !!keyword
        ? list.filter((item) =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
          )
        : list
    );
    setSearch(keyword);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search"
          value={search}
          onChange={filter}
        ></FormControl>
        <Button variant="outline-primary">Add</Button>
      </InputGroup>

      {tvList.length ? (
        <div className="tv-list">
          {tvList.map((item) => (
            <Card key={item.name}>
              <Card.Img variant="top" src={item.imgUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Row>
                  <Col>
                    <Button variant="primary" className="w-100">
                      Edit
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="danger" className="w-100">
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <h3 className="text-center">No result found</h3>
      )}
    </>
  );
}
