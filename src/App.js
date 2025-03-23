import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import Kiva from "./assets/kiva.svg";

function App() {
  return (
    <div className="body">
      <Header />
      <div className="container ">
        <section className="py-5 row d-flex align-items-center">
          <div className="col-7 container">
            <h1 className="fw-bold display-2 mb-3">
              Slack is where the future works
            </h1>
            <p className="fs-5 w-75 ">
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </p>
            <div className="d-flex mt-5">
              <button className="prim-btn px-4 py-2 me-1">TRY FOR FREE </button>
              <button className="tert-btn d-flex align-items-center">
                <span className="bg-light me-1 p-1 ">
                  <img
                    width="25"
                    className="img-fluid"
                    src="https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png"
                  />
                </span>
                <span className="fw-medium"> SIGNUP WITH GOOGLE</span>
              </button>
            </div>
          </div>
          <div className="col-5">
            <img
              className="img-fluid rounded"
              src="https://a.slack-edge.com/8ce325c/marketing/img/homepage/e2e-prospects/unfurl/slack-e2e-homepage-unfurl.en-GB.jpg"
            />
          </div>
        </section>

        <section className="company py-5">
          <div className="d-flex flex-wrap justify-content-around py-4">
            <div>
              <img
                width={80}
                className="img-fluid"
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/FOX_wordmark.svg"
              />
            </div>
            <div>
              <img
                width={100}
                className="img-fluid body"
                src="http://www.logo-sheji.cn/wp-content/uploads/2020/7/AfYBBn.png"
              />
            </div>
            <div>
              <img
                width={100}
                className="img-fluid "
                src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Intuit_Logo.svg"
              />
            </div>
            <div>
              <img
                width={120}
                className="img-fluid "
                src="https://assets.fastly.carvana.io/partner-header-logos-assets/combo-desktop-carvana.svg"
              />
            </div>
            <div>
              <img width={80} className="img-fluid" src={Kiva} />
            </div>
          </div>
        </section>

        <section className="py-5 row d-flex align-items-center">
          <div className="col-md-6 container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Yt66-u5UVOM?si=cM3ZAJ4AYgAnHxDv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold display-6 mb-3">
              Now is your moment to build a better tomorrow
            </h2>
            <p className="fs-5 w-75 ">
              We've seen what the future can be. Now it's time to decide what it
              will be.
            </p>
            <div className="d-flex mt-5">
              <button className="sec-btn px-4 py-2 me-1">WATCH VIDEO</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
