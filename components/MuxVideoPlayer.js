
'use client';
import MuxPlayer from '@mux/mux-player-react';

const MuxVideoPlayer = ({ playbackId }) => {
  if (!playbackId) {
    return <p>Loading video...</p>;
  }

  return (
    
      <MuxPlayer
        autoPlay={false}        
        muted                  
        playsInline            
        streamType="on-demand"
        playbackId={playbackId}
        className="aspect-video rounded-lg shadow-xl"
      />
  
  );
};

export default MuxVideoPlayer;