import * as express from 'express';
import { Request, Response} from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res:Response) => {
  res.send({
    message:'Up Server listem 3000'
  })
})

app.listen(port, () =>{
  console.log("Servidor iniciado na porta " + port);
})