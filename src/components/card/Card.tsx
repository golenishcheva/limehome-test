import React from 'react';
import './Card.css';

interface Props {
    hotel: {
        id: string,
        title: string,
        distance: number,
        vicinity: string,
        active: boolean
    };
};

class Card extends React.Component <Props>{

    render() {
        return (
            <div className='hotel_cards-item' key={this.props.hotel.id}>
                <div className='hotel_card-content'>
                    <div className='hotel_card-details'>
                        <div className='hotel_card-details--photo'>
                            <img src='https://via.placeholder.com/200x300' alt='Hotel'></img>
                        </div>
                        <div className='hotel_card-details--info'>
                            <h3 className='info_title'> {this.props.hotel.title} </h3>
                            <p className='info_distance'>{(this.props.hotel.distance/1000).toFixed(1)} km from the city center</p>
                            <p className='info_price'>${Math.floor(Math.random() * 90 + 10)}</p>
                            <p className='info_desc'>{this.props.hotel.vicinity}</p>
                        </div>
                    </div>
                    <div className='hotel_card-control'>
                        <button className='card_button'>Book</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;