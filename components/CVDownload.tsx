import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Button } from '@mui/material'

//https://assets6.lottiefiles.com/packages/lf20_1eLAOamprA.json
/**
 * 
 * <a id="saveAsPdfBtn" href="https://www.sejda.com/html-to-pdf">Save as PDF</a>
<script>
document.getElementById('saveAsPdfBtn').addEventListener('click', function(e){
  var pageUrl = encodeURIComponent(window.location.href);
  var opts = ['save-link=' + pageUrl, 'pageOrientation=auto'];
  window.open('https://www.sejda.com/html-to-pdf?' + opts.join('&'));
  e.preventDefault();
});
</script>
 */
export default function CVDownload() {

  const downloadPdf = (e:any)=>{
    const pageUrl = window.location.href + 'cv';
    const opts = ['save-link=' + pageUrl, 'pageOrientation=auto'];
    window.open('https://www.sejda.com/html-to-pdf?' + opts.join('&'));
    e.preventDefault();
  }
  

  return (
<>
<div className='bottom-0 right-50 d-none d-lg-block' style={{position:'fixed'}}>
        <a href="#" onClick={downloadPdf}>
        <Player
      autoplay
      loop
      src="https://assets6.lottiefiles.com/packages/lf20_1eLAOamprA.json"
      style={{ height: '100px', width: '100px' }}
    >
    </Player> 
        </a>
    </div>
    <div className='bg-white h-5-rem bottom-0 d-block d-lg-none text-center w-100' style={{position:'fixed',zIndex:'999'}}>
        <Button onClick={downloadPdf} className='mt-3' variant='contained'>Download CV</Button>
    </div>
</>
  )
}
