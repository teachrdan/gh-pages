import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div>
      <p>
          This is the professional page for Dan Tennery-Spalding.
      </p>
      <div><Link to="/example">Dan Tennery-Spalding</Link></div>
      <div><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
        Example two deep with query and hash
      </Link></div>
    </div>
  );
}

export default Home;
