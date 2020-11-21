import { useState } from 'react';

export default function useSettings() {
  const [url, setUrl] = useState('http://localhost');
  return {
    url, setUrl
  };
}