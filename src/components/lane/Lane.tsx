import React from 'react';
import './Lane.css';
import Card from '../card/Card';
import SlickSlider from "react-slick";

interface Props {
    hotels: Array<Hotel>;
};
interface Hotel {
    id: string,
    title: string,
    distance: number,
    vicinity: string,
    active: boolean
}

interface State {
    windowWidth: number;
};

class Lane extends React.Component <Props, State> {
    private sliderRef = React.createRef<any>();

    constructor(props: any){
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        this.setState({windowWidth: window.innerWidth})
    }

    render() {

        const cardWidth = 280;
        const cards = Math.floor((this.state.windowWidth - 100) / cardWidth);
        const cardNum = cards < 1 ? 1 : cards;
        const currentSlide = this.props.hotels.findIndex(hotel => hotel.active);
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: cardNum,
            arrows: false,
            focusOnSelect: false,
            initialSlide: currentSlide,
            draggable: false,
            centerMode: true,
            centerPadding: '15px',
            swipe: false
        };

        if (this.sliderRef && this.sliderRef.current) this.sliderRef.current.slickGoTo(currentSlide);

        return (
            <div className='hotel_cards'>
                <SlickSlider {...settings} ref={this.sliderRef}>
                    {this.props.hotels.map((hotel) =>
                        <Card key={hotel.id} hotel={hotel}/>
                    )}
                </SlickSlider>
            </div>
        );
    }
}

export default Lane;