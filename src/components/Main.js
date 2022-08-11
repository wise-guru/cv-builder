import React from 'react';
import BuildForm from './BuildForm';
import '../styles/App.css';
import loadPage from './loadPage';
import PreviewForm from './PreviewForm';

function Main() {
  return (
    <div className="mainContainer">
      <div className="buttonContainer">
        <button onClick={loadPage('buildMode')}>Build Mode</button>
        <button onClick={loadPage('previewMode')}>Preview Mode</button>
      </div>
      <div className="cvForms">
        <div className="build form">
          <BuildForm />
        </div>
        <div className="preview form">
          <PreviewForm />
        </div>
      </div>
    </div>
  );
}

export default Main;
