import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

function Tabs() {
  return (
    <div className="col-md-12">
      <div className="col-md-4">
        <Link to="/"><Button bsStyle="primary">Coins</Button></Link>
      </div>
      <div className="col-md-4">
        <Button bsStyle="info">Tokens</Button>
      </div>
      <div className="col-md-4">
        <Link to="/dashboard"><Button bsStyle="success">Dashboard</Button></Link>
      </div>
    </div>
  );
}

export default Tabs;
