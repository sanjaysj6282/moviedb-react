import React from "react";

function About() {
  return (
    <>
      <div
        className="background"
        style={{
          position: "absolute",
          width: "100%",
          height: "91%",
          backgroundColor: "#202020",
        }}
      >
        <div className="container" style={{ color: "white" }}>
          <h2 style={{ margin: "40px 0 0 0" }}>About</h2>
          <br />
          <br />
          <div class="d-flex justify-content-around ms-4 me-4 text-center fs-5">
            The Movie Database (TMDB) is a database made by Sanjay based on TMDB API. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
