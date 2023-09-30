import React from 'react';
import Facebook from '../assets/Facebook';
import Instagram from '../assets/Instagram';
import Twitter from '../assets/Twitter';
import AudioPlayer from '../Component/AudioPlayer';

const reproductorVista = () => {
  const dario =
    'https://blogger.googleusercontent.com/img/a/AVvXsEjPn_egOENveym3IQN0X5j99y0vRRzU6yX9KcW4BSCv7A9QTKZgLcHtSDGLPx3IL0zs0mKhUXYrgcBdTp3TAoN_HzFEh35OLKJU95KtRqPgb2IxfwnL5uVdzEfSTjHBLnpoxtVwpLGC30ZNx2hQtz1fGLbVxjBRCtX07MqLfON1TRS5q0Ttd1xciESTuPs';

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
            <h1 className="App text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Nombre de tu radio</h1>
            <p className="py-2 text-green-100">streaming radio de prueba link radio arandomCore.</p>
            <div className="text-center">
              <AudioPlayer />
            </div>
            <h1 className="App text-2xl animate-pulse font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-400">A la venta software de radio streaming PERSONALIZADO</h1>
            <p className="py-2 text-green-100">al aire 24/7 generos al gusto nuestros oyentes.</p>
                        
            

            <div className="lg:pt-8 pt-10">
              <span>
                <h6 className="text-xl lg:text-1xl text-center text-white">
                  Nuestras redes sociales.
                </h6>
                <h3 className="lg:text-1zxl text-center text-white">
                  ¿Quieres saber más acerca del desarrollador?
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
