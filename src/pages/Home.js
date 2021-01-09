import React, { Component, Fragment } from 'react';

import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      <p style={{ position: 'relative', color: 'white' }}>
        Ups! 😞 No se encontraron resultados!
      </p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  }

  render() {
    return (
      <Fragment>
        <Title>Buscador de Peliculas</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small style={{ position: 'relative', color: 'white' }}>
            Usa el formulario para buscar una pelicula
          </small>
        )}
      </Fragment>
    );
  }
}
