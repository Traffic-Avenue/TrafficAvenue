import { useEffect, useState } from 'react';
import { init } from '@telegram-apps/sdk-react';

export default function App() {

  useEffect(() => {
    init();
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.setHeaderColor('#000');
    window.Telegram.WebApp.setBackgroundColor('#000');
  }, []);

  return (
    <div style={{background:'#000', color:'white', minHeight:'100vh', padding:'16px'}}>
      <h1 style={{color:'#39FF14'}}>Traffic <span style={{color:'#800080'}}>Avenue</span></h1>
      <p>Buy. Sell. Move Traffic.</p>
      <button style={{background:'#39FF14', color:'#000', padding:'10px', border:'none'}}>
        P2P MARKETPLACE
      </button>
    </div>
  )
}
