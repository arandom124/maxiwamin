import React from 'react';
import Facebook from '../assets/Facebook';
import Instagram from '../assets/Instagram';
import Twitter from '../assets/Twitter';
import AudioPlayer from '../Component/AudioPlayer';

const reproductorVista = () => {
  const dario =
    'https://blogger.googleusercontent.com/img/a/AVvXsEixRH_PPVqc7bW1WZRpwoY6ZXGEkqKGZpohjsz8fa3faLKy9j82jBwgfNkzyBjKxD_j_EFeH3fUK9VMVfhckfwcKYqAtJLaoD5gFfqotQatwEklQQvfjT7A1mYAuGgPScPusvTYK9WEWQ0CSagUMxUdc6aDJQCh4f-3Jz7UOyHcD7a5yZtaJtnTZKd-oSc';

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .rotating-image {
            animation: rotate 20s linear infinite; /* Ajusta la duración y el tipo de animación según tus preferencias */
          }
        `}
      </style>
      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <img
            src={dario}
            className="max-w-sm rounded-lg shadow-2xl rotating-image"
            style={{ width: '240px', height: '240px' }}
          />
          <div>
            {/* appp significa que esta llamando las clase del streaming */}
            <h1 className="App text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">La Maxima Silvia</h1>
            <p className="py-6 text-green-100">al aire 24/7 generos al gusto nuestros oyentes.</p>
            <div className="text-center">
              <AudioPlayer />
            </div>

            <div className="lg:pt-8 pt-10">
              <span>
                <h6 className="text-xl lg:text-1xl text-center text-white">
                  Nuestras redes sociales.
                </h6>
                <h3 className="lg:text-1zxl text-center text-white">
                  ¿Quieres saber más acerca de La Maxima?
                </h3>
                <br />
              </span>
              <span className="flex flex-row gap-14">
                <a
                  className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
                  target="blank"
                  // href="#"
                >
                  <Facebook />
                </a>
                <a
                  className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
                  target="blank"
                  href="#"
                >
                  <Instagram />
                </a>
                <a
                  className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
                  target="blank"
                >
                  <Twitter />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default reproductorVista;
