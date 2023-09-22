import React, { Component } from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      isLoading: false,
      volume: 0.5, // Valor de volumen inicial (0.5 = 50%)
    };
  }

  toggleAudio = () => {
    const audio = this.audioRef;
    
    if (!audio.src) {
      // Verifica si el src del audio está vacío y muestra una alerta
      alert('Sin conexión Streaming');
      return;
    }

    if (this.state.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    this.setState({ isPlaying: !this.state.isPlaying, isLoading: true });

    // Agregamos una simulación de carga para ilustrar "Cargando..."
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000); // Simulamos 2 segundos de carga, ajusta según necesites
  };

  handleVolumeChange = (e) => {
    const audio = this.audioRef;
    const volume = parseFloat(e.target.value);
    audio.volume = volume;
    this.setState({ volume });
  };

  render() {
    return (
      <div className="text-center">
        <audio
          ref={(audio) => (this.audioRef = audio)}
          src="https://stream-42.zeno.fm/avngd65mky8uv?zs=Uu_joFEgQoO7QYI8Qz4LmA"
          onPlay={() => this.setState({ isLoading: false })}
          volume={this.state.volume}
        />
        <div className="flex flex-col items-center">
          <button
            onClick={this.toggleAudio}
            className={`bg-red-100 text-white rounded-full w-34 h-34 flex items-center justify-center`}
          >
            {this.state.isLoading ? (
              'Cargando...'
            ) : this.state.isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M9 9h6v6H9z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 24 24"><path d="m10 17 6-5-6-5z"/><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/></svg>
            )}
          </button>
          <div className="mt-4">
            <label className="block text-white">Volumen:</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={this.state.volume}
              onChange={this.handleVolumeChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
