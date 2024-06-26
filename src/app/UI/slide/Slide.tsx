import { slide_dummy } from '@/json/slide_dummy'
import style from "./Slide.module.scss";
import Button from '../button/Button';
// import ButtonContainer from '../button container/ButtonContainer';


const Slide = () => {

  return (
    <>
      {
        slide_dummy.map((item) => (

          <div className={style.container} key={item.id} style={{
            background: `url(${item.image}) center center / cover no-repeat`,
            // backgroundImage: `url(${item.image})`,
            width: '1000px',
            height: '500px',

          }}>
            <h1>{item.heading}</h1>
            <p>{item.description}</p>
            <div className={style.buttoncontainer}>
              <Button text={item.btn1} />
              <Button text={item.btn2} />
            </div>
            {/* <ButtonContainer/> */}
          </div>


        ))
      }




    </>
  )
}

export default Slide;





// background: url(&quot;img/home/slide1.jpg&quot;) center center / cover no-repeat;