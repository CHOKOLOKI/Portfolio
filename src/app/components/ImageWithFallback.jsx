import { useState } from 'react';

export function ImageWithFallback({ src, alt, className = '' }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div className={`${className} bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center`}>
        <span className="text-slate-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`${className} bg-slate-800 animate-pulse`} />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </>
  );
}
