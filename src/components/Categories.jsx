import React from 'react'
import PropTypes, {number} from "prop-types";
import PizzaBlock from "./PizzaBlock";

// class Categories extends React.Component {
//     state = {
//         activeItem: 3,
//         test: 123,
//     };
//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//         });
//     }
//     render() {
//         const {items, onClickItem} = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {items.map((name, index) =>
//                         <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => {
//                             this.onSelectItem(index)
//                         }} key={`${name}_${index}`}>
//                             {name}
//                         </li>)}
//                 </ul>
//             </div>
//         )
//     }
// }

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>Все
                </li>
                {items && items.map((name, index) =>
                    <li className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)}
                        key={`${name}_${index}`}>
                        {name}
                    </li>)}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
}
Categories.defaultProps = {activeCategory: null, items: []};


export default Categories;