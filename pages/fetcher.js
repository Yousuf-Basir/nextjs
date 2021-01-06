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
  
    console.log('Connecting …')
    const { data, headers } = await Axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
    const totalLength = headers['content-length']
  
    console.log('Starting download')
    const progressBar = new ProgressBar('-> downloading [:bar] :percent :etas', {
        width: 40,
        complete: '=',
        incomplete: ' ',
        renderThrottle: 1,
        total: parseInt(totalLength)
      })
  
    const writer = Fs.createWriteStream(
      Path.resolve("public/Files/movie.jpg")
    )
  
    data.on('data', (chunk) => progressBar.tick(chunk.length))
    data.pipe(writer)
  }

export default Fetcher