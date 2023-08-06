import React from 'react'
import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres } from "../store";
import { firebaseAuth } from "../utils/Firebasess";
import { onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import NotAvailable from "../component/NotAvailable";
import Slider from "../component/Slider";
import Navbar from "../component/Navbar";
import SelectGenre from '../component/SelectGenre';

function TVShows() {
    const [isScrolled,setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getGenres());
    }, []);
    
    
      useEffect(() => {
        if (genresLoaded) {
          dispatch(fetchMovies({ genres, type: "tv" }));
        }
      },[genresLoaded] );
    
      const [user, setUser] = useState(undefined);
    
      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(currentUser.uid);
        else navigate("/login");
      });
    
      window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    
  return (
    <Container>
    <div className="navbar">
      <Navbar isScrolled={isScrolled} />
    </div>
    
    <div className="data">
    <SelectGenre genres={genres} type="tv" />
      {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
    </div>
  </Container>
);
}

const Container = styled.div`
.data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default TVShows;

