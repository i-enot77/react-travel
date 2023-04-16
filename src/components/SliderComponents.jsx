import Slider from "./Slider";
import Button from "./Button";
import { slider, slider2, slider3, slider4} from '../assets/data/slider';
import opinions from '../assets/img/opinions.png';
import opinions2 from '../assets/img/purpleWoman_reviews.png';

export const SliderComponent = () => {
    return(
        <div className="slider_container">
            {slider.map((item) => <Slider content={item}>
                    <img src={opinions} alt="sometext" className='slider_opinion__img' />
                </Slider>)}
        </div>
    )
}

export const SliderComponent2 = () => {
    return(
        <div className="slider_container second">
            {slider2.map((item) => <Slider content={item}>
                    <img src={opinions2} alt="sometext" className='slider_opinion2__img' />
                </Slider>)}
        </div>
    )
}

export const SliderComponent3 = () => {
    return(
        <div className="slider_container third">
            {slider3.map((item) => <Slider content={item}>
                <Button btnName={"find_btn"}
                        content={"Find avilable cabins"}/>
            </Slider>)}
        </div>
    )
}

export const SliderComponent4 = () => {
    return(
        <div className="slider_container forth">
            {slider4.map((item) => <Slider content={item}>
                <Button btnName={"escape_btn"}
                        content={"Find avilable cabins"}/>
            </Slider>)}
        </div>
    )
}
