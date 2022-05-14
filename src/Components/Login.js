import * as React from 'react';
import { useContext,useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import './Login.css'
import insta from '../Assests/Instagram.JPG'
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from '../Assests/img3.jpg';
import img4 from '../Assests/img4.jpg';
import img5 from '../Assests/img5.jpg';
import { bgcolor } from '@mui/system';
import {useHistory} from 'react-router-dom'
import bg from '../Assests/insta.png'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import { AuthContext } from '../Context/AuthContext';


export default function Login() {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const history = useHistory();
    const {login} = useContext(AuthContext);

    const handleClick = async() => {
        try{
            setError('');
            setLoading(true)
            let res = await login(email,password);
            setLoading(false);
            history.push('/')
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false);
        }
    }
  return (
      <div className='loginWrapper'>
          
          <div className="imgcar" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
              <div className="car">
              <CarouselProvider
       visibleSlides={1}
       totalSlides={5}
       naturalSlideHeight={423}
       naturalSlideWidth={238}
       hasMasterSpinner
       isPlaying={true}
       infinite={true}
       dragEnabled={false}
       touchEnabled={false}
      >
        <Slider>
        <Slide index={0}><Image src={img1}/></Slide>
                    <Slide index={1}><Image src={img2}/></Slide>
                    <Slide index={2}><Image src={img3}/></Slide>
                    <Slide index={3}><Image src={img4}/></Slide>
                    <Slide index={4}><Image src={img5}/></Slide>
        </Slider>
      </CarouselProvider>
              </div>
          </div>

          <div className="loginCard">
          <Card variant="outlined">
          <div className="insta-logo">
              <img src={insta} alt="" />
          </div>
      <CardContent>
        
        {error!='' && <Alert severity="error">{error}</Alert>}
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth="true" margin="dense" size ="small" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth="true" margin="dense" size ="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
       <Typography variant="subtitle1" color="primary"  textAlign="center">
           Forget Password
       </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" fullWidth="true" variant="contained" onClick={handleClick} disabled={loading}>Log In</Button>
        
      </CardActions>
      
    </Card>
    <Card variant="outlined" height="3vh"  >
       <CardContent>
           <Typography variant="subtitle1" margin="1%" fontSize="15px" textAlign="center" justifyContent="center">
               Don't have an account ? <Link to="/signup" color="primary" style={{textDecoration:"none"}}>Signup</Link>
           </Typography>
       </CardContent>
    </Card>
          </div>
      </div>
    
  );
}
