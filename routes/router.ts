
import {Router, Request, Response} from 'express';

 const router = Router();

router.get('/mensajes', (req:Request, res: Response)=>{
 res.json({
     ok: true,
     mensaje: 'Todo está bien'
 });
});


router.post('/mensajes', (req:Request, res: Response)=>{

    //capturar el post
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
        ok: true,
        mensaje: "Mensaje de POST",
        cuerpo,
        de
    });
   });
  
   router.post('/mensajes/:id', (req:Request, res: Response)=>{

    //capturar el post
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: "Mensaje de POST",
        cuerpo,
        de,
        id
    });
   });

export default router;