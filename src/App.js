import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './client/Navbar/components/Navbar';
import NotFoundPage from './client/Movies/pages/NotFoundPage'

// import TrendingMoviePage from './client/Movies/pages/TrendingMoviePage'
// import MovieSearchPage from './client/Movies/pages/MovieSearchPage'
// import SingleMoviePage from './client/Movies/pages/SingleMoviePage'

const TrendingMoviePage = lazy(() => import('./client/Movies/pages/TrendingMoviePage' /* webpackChunkName: "home-page" */))
const MovieSearchPage = lazy(() => import('./client/Movies/pages/MovieSearchPage' /* webpackChunkName: "movie-search-page" */))
const SingleMoviePage = lazy(() => import('./client/Movies/pages/SingleMoviePage' /* webpackChunkName: "movie-page" */))

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={TrendingMoviePage} />
          <Route exact path='/movie/search' component={MovieSearchPage} />

          <Route exact path="/movie/:movieId" component={SingleMoviePage} />
          <Route exact path='/movie/:movieId/cast' component={SingleMoviePage} />
          <Route exact path='/movie/:movieId/reviews' component={SingleMoviePage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
