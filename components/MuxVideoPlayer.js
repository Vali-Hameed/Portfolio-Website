
'use client';
import { useEffect, useRef, useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';

const MuxVideoPlayer = ({ playbackId }) => {
  const [maxResolution, setMaxResolution] = useState('auto');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resolutionOptions, setResolutionOptions] = useState([
    { label: 'Auto', value: 'auto' }
  ]);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!playbackId) {
      return;
    }

    const controller = new AbortController();

    const loadRenditions = async () => {
      try {
        const response = await fetch(`https://stream.mux.com/${playbackId}.m3u8`, {
          signal: controller.signal
        });

        if (!response.ok) {
          return;
        }

        const manifestText = await response.text();
        const resolutionMatches = [...manifestText.matchAll(/RESOLUTION=\d+x(\d+)/g)];
        const heights = Array.from(
          new Set(
            resolutionMatches
              .map((match) => Number(match[1]))
              .filter((height) => Number.isFinite(height) && height > 0)
          )
        ).sort((a, b) => b - a);

        const nextOptions = [
          { label: 'Auto', value: 'auto' },
          ...heights.map((height) => ({
            label: `${height}p`,
            value: `${height}p`
          }))
        ];

        setResolutionOptions(nextOptions);
      } catch (error) {
        if (error.name !== 'AbortError') {
          // Keep default auto option if manifest parsing fails.
          setResolutionOptions([{ label: 'Auto', value: 'auto' }]);
        }
      }
    };

    loadRenditions();

    return () => {
      controller.abort();
    };
  }, [playbackId]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleOutsidePress = (event) => {
      const menuElement = menuRef.current;
      const buttonElement = buttonRef.current;

      if (!menuElement || !buttonElement) {
        return;
      }

      const clickedInsideMenu = menuElement.contains(event.target);
      const clickedToggleButton = buttonElement.contains(event.target);

      if (!clickedInsideMenu && !clickedToggleButton) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsidePress);
    document.addEventListener('touchstart', handleOutsidePress);

    return () => {
      document.removeEventListener('mousedown', handleOutsidePress);
      document.removeEventListener('touchstart', handleOutsidePress);
    };
  }, [isMenuOpen]);

  if (!playbackId) {
    return <p>Loading video...</p>;
  }

  return (
    <div className="relative w-full h-full">
      <MuxPlayer
        autoPlay={false}        
        muted                  
        playsInline            
        streamType="on-demand"
        playbackId={playbackId}
        maxResolution={maxResolution === 'auto' ? undefined : maxResolution}
        className="w-full h-full rounded-lg shadow-xl"
      >
        <button
          ref={buttonRef}
          slot="bottom-chrome"
          type="button"
          aria-label="Change video quality"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-1 rounded border border-purple-500/60 bg-[#0A0512]/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-200 transition-colors hover:bg-purple-900/60"
        >
          ...
        </button>
      </MuxPlayer>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute bottom-14 right-3 z-30 w-36 overflow-hidden border border-purple-800/70 bg-[#0A0512]/95 text-slate-100 shadow-xl"
        >
          {resolutionOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setMaxResolution(option.value);
                setIsMenuOpen(false);
              }}
              className={`block w-full border-b border-purple-900/40 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide transition-colors last:border-b-0 hover:bg-purple-900/40 ${
                maxResolution === option.value ? 'bg-purple-700/40 text-purple-100' : 'text-slate-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default MuxVideoPlayer;