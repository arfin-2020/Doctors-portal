import React from 'react';
import child from '../../../images/Child.png'
import './FeaturesService.css'
const FeaturesServices = () => {
    return (
        <div className = 'fetures-container'>
            <div className = 'row'>
                <div className="col-md-5">
                    <img className = 'img-fluid' src = {child} alt = ""/>
                </div>
                <div className="col-md-7">
                    <h1>Expectional Dental <br/> Care, On Your Terms</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea, facere laudantium neque dicta numquam aut natus inventore cum alias, impedit ipsa ipsum nobis odio quos porro provident perferendis. Aliquam quam consectetur blanditiis, libero obcaecati corporis, maiores pariatur, velit repellat tenetur alias beatae rem amet repellendus porro veritatis accusantium exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque optio nesciunt quos dolorum ipsum corporis omnis voluptatem, nemo eveniet quidem accusantium sint fugiat, beatae iusto temporibus totam! At rerum eius debitis sed, aspernatur, minima voluptatibus iure necessitatibus saepe perferendis vitae quas illum eum tempora nihil odit vero quam, adipisci quo!</p>
                    <button className = "btn btn-secondary"> Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default FeaturesServices;