import React from "react";

const CardHeader = (props) => {
  return (
    <div className="card-header">
      <h3 className="card-title">{props.title}</h3>

      <div className="card-tools">
        <button
          type="button"
          className="btn btn-tool"
          data-card-widget="card-refresh"
          data-source="widgets.html"
          data-source-selector="#card-refresh-content"
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
