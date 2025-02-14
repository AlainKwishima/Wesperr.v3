import React, { useState, useEffect } from 'react';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Mic, MicOff, Phone, Volume2, VolumeX, Volume1 } from 'react-feather';

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export default function AudioCall() {
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [duration, setDuration] = useState(0);
  const [signalStrength, setSignalStrength] = useState(3); // 1-3

  // Simulate call duration
  useEffect(() => {
    const timer = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate random signal strength changes
  useEffect(() => {
    const timer = setInterval(() => {
      setSignalStrength(Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-zinc-950">
      {/* Main call area */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-4">
        <div className="relative">
          <Avatar className="w-32 h-32 border-4 border-zinc-800">
            <AvatarBadge>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-irePPzq9HeGqkC5C3JRkzDzRfBrhum.png"
                alt="Caller"
              />
            </AvatarBadge>
            <div className="text-4xl bg-yellow-500">UN</div>
          </Avatar>
          <div className="absolute -bottom-2 right-0 bg-zinc-800 px-2 py-1 rounded-full flex items-center gap-1">
            {signalStrength >= 1 && <div className="w-3 h-3 bg-green-500 rounded-full" />}
            {signalStrength >= 2 && <div className="w-3 h-3 bg-green-500 rounded-full" />}
            {signalStrength >= 3 && <div className="w-3 h-3 bg-green-500 rounded-full" />}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-semibold">User Name</h2>
          <p className="text-zinc-400 font-mono">{formatTime(duration)}</p>
        </div>

        {/* Audio wave animation */}
        <div className="flex items-center gap-1 h-8">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary/60 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Call controls */}
      <div className="p-8 bg-zinc-900">
        <div className="flex items-center justify-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className={`w-16 h-16 rounded-full ${isSpeakerOn ? 'hover:bg-zinc-800' : 'bg-zinc-800 text-zinc-400'}`}
            onClick={() => setIsSpeakerOn(!isSpeakerOn)}
          >
            {isSpeakerOn ? <Volume2 className="w-8 h-8" /> : <VolumeX className="w-8 h-8" />}
          </Button>

          <Button variant="solid" size="icon" className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600">
            <Phone className="w-10 h-10 rotate-[135deg]" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={`w-16 h-16 rounded-full ${
              isAudioOn ? 'hover:bg-zinc-800' : 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
            }`}
            onClick={() => setIsAudioOn(!isAudioOn)}
          >
            {isAudioOn ? <Mic className="w-8 h-8" /> : <MicOff className="w-8 h-8" />}
          </Button>
        </div>
      </div>

      {/* Volume indicator */}
      {isSpeakerOn && (
        <div className="absolute top-8 right-8 flex items-center gap-1">
          <Volume1 className="w-4 h-4 text-zinc-400" />
          <div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-pulse" style={{ width: '70%' }} />
          </div>
        </div>
      )}
    </div>
  );
}

