import React from 'react';

function Header(props) {
  return (
    <header style={headerStyle}>
      <h1>Cool Posts</h1>
    </header>
  );
}

const headerStyle = {
  textAlign: 'center',
  padding: '10px'
}

export default Header;