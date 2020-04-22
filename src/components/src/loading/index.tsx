import React from "react";
import ReactLoading from "react-loading";
import './loading.scss'

/* 
  Documentation on https://github.com/fakiolinho/react-loading
*/
const Loading = React.memo(() => {
  return (
    <div className="parent-load">
      <ReactLoading type="bars" color="#00529a" width="120px" height="120px" className="child-load" />
    </div>
  );
});

export default Loading;