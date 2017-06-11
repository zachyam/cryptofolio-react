import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

function Tabs() {
  return (
    <div className="col-md-12">
      <div className="col-md-4">
        <Button bsStyle="primary">Coins</Button>
      </div>
      <div className="col-md-4">
        <Button bsStyle="info">Tokens</Button>
      </div>
      <div className="col-md-4">
        <Button bsStyle="success"><Link to="/dashboard">Dashboard</Link></Button>
      </div>
    </div>
  );
}

export default Tabs;
