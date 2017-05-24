import React from 'react';
import { Button } from 'react-bootstrap';

function Tabs() {
  return (
    <div className="col-md-12">
      <div className="col-md-4">
        <Button bsStyle="primary">Currencies</Button>
      </div>
      <div className="col-md-4">
        <Button bsStyle="info">Coins</Button>
      </div>
      <div className="col-md-4">
        <Button bsStyle="success">Dashboard</Button>
      </div>
    </div>
  );
}

export default Tabs;
