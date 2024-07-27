import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi2";
import Layout from "../../Componentes/Layout/Layout";
import Biblioteca from "../Biblioteca/Biblioteca";
import ReactStars from 'react-rating-stars-component';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate';
import '../Home/Home.css';

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate(); 
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [artistFilter, setArtistFilter] = useState('');
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://lucasyana.000webhostapp.com/api.php');
        const updatedData = response.data.map(item => ({ ...item, favorite: false }));
        setData(updatedData);
        setFilteredData(updatedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const lowerCaseSearch = search.toLowerCase();
    const lowerCaseArtistFilter = artistFilter.toLowerCase();
    const filtered = data.filter(item =>
      item.titulo.toLowerCase().includes(lowerCaseSearch) &&
      item.artista.toLowerCase().includes(lowerCaseArtistFilter)
    );

    console.log('Filtered Data:', filtered);
    setFilteredData(filtered);
  }, [search, artistFilter, data]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleFavoriteToggle = (index) => {
    const updatedData = [...filteredData];
    updatedData[index].favorite = !updatedData[index].favorite;
    setFilteredData(updatedData);

    const originalDataIndex = data.findIndex(item => item.titulo === updatedData[index].titulo);
    if (originalDataIndex !== -1) {
      const originalData = [...data];
      originalData[originalDataIndex].favorite = updatedData[index].favorite;
      setData(originalData);
    }
  };

  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage * itemsPerPage) + itemsPerPage
  );

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

  return (
    <Layout>
      <div className="App">
        <button className="back-home" onClick={() => navigate('/')}> 
          <div className="icon-home">
            <HiArrowLeft size={24} />
          </div>               
        </button>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>     
        </div>
        <Biblioteca />                     
      </div>
      <div className="title-container">
        <h2>Tus artistas favoritos</h2>
      </div>
      <Form className='search-input'>
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Buscar por Título..."
            value={search}
            onChange={(e) => {
              console.log('Search Term:', e.target.value);
              setSearch(e.target.value);
            }}
            className='search-field'
          />
        </Form.Group>
      </Form>
      <div className="card-container">
        {paginatedData.map((item, index) => (
          <Card key={index} className="custom-card">
            <Card.Img variant="top" src={item.img} alt={item.titulo} className="custom-card-img" />
            <Card.Body className="custom-card-body">
              <Card.Title className="custom-card-title">
                {item.titulo}
                <span
                  style={{ cursor: 'pointer', marginLeft: '10px' }}
                  onClick={() => handleFavoriteToggle(index)}
                >
                  {item.favorite ? <FaHeart color="red" /> : <FaRegHeart />}
                </span>
              </Card.Title>
              <Card.Text className="custom-card-text">{item.artista}</Card.Text>
              <Card.Text className="custom-card-text">{item.album}</Card.Text>
              <Card.Text className="custom-card-text">{item.audioUrl}</Card.Text>
              <ReactStars
                count={5}
                value={item.rating}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              <audio controls className="audio-controls">
                <source src={item.audioUrl + '.mp3'} type="audio/mpeg" />
                <source src={item.audioUrl + '.ogg'} type="audio/ogg" />
                Tu navegador no soporta la reproducción de audio.
              </audio>
            </Card.Body>
          </Card>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </Layout>
  );
}

export default Home;
