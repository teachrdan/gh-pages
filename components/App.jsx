import React from 'react';
import { Link } from 'react-router';

function App({ children, routes }) {

  function generateMapMenu() {
    let path = '';
    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link
              to={path += ((path.slice(-1) === '/' ? '' : '/') +
                  (route.path === '/' ? '' : route.path))}
            >
              {route.mapMenuTitle}
            </Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  return(
    <div style={{maxWidth: '500px'}}>
        <p>
            This is the professional page for Dan Tennery-Spalding. (under construction)
        </p>
        <p>
            <a href="https://blog.apozy.com/were-all-in-this-together-how-sea-pirates-exposed-cybersecuritys-big-lie/">“We're All in this Together”: How Sea Pirates Exposed Cybersecurity's Big Lie</a>
        </p>
        {/*
          <nav>
            {generateMapMenu()}
          </nav>
      */}
      {children}
    </div>
  );
}

export default App;
