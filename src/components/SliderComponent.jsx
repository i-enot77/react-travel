import Slider from "./Slider";

export const SliderComponent = ({sliderName, slider, children}) => {
    return(
        <div className={`${sliderName} slider_container`}>
            {slider.map((item) => <Slider content={item}>
                    {children}
                </Slider>)}
        </div>
    )
}
export default SliderComponent;