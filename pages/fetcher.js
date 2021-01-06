import { useRouter } from 'next/router';
import Fs from 'fs';
import Path from 'path';
import Axios from 'axios';
import ProgressBar from 'progress';

const Fetcher = () => {
  const router = useRouter()
  const { pid } = router.query
    console.log(pid);
  return <p>Post: {pid}</p>
}

Fetcher.getInitialProps = async (ctx) => {
    console.log(ctx.query.url)
    downloadImage(ctx.query.url);
    return { stars: "start dataaaaa" }
  }

  async function downloadImage (_url) {  
    const url = _url
  
    console.log('Connecting …');
    logger("started");
    const { data, headers } = await Axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
    const totalLength = headers['content-length']
    const progressBar = new ProgressBar('-> downloading [:bar] :percent :etas', {
        width: 40,
        complete: '=',
        incomplete: ' ',
        renderThrottle: 1,
        total: parseInt(totalLength)
      })
  
    const writer = Fs.createWriteStream(
      Path.resolve("public/Files/movie.mp4")
    )
  
    data.on('data', (chunk) => {
        let chunkSize = parseInt(chunk.length);
        logger(bytesToSize(chunkSize))
    })
    data.pipe(writer)
  }



  const logger = (text)=>{
    Fs.writeFile('public/Files/logtext.txt', text, function (err) {
        if (err) return console.log(err);
      });
  }


  function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }
export default Fetcher