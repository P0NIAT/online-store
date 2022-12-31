import './directory.styles.scss';
import CategoryItem from '../category-item/categoty-item.comp';

const Directory = ({categories}) => {

	return (
		<div className='categories-container'>
			{categories.map(({ id, title, imageUrl }) => {
				return <CategoryItem key={id} title={title} imageUrl={imageUrl} />;
			})}
		</div>
	);
};

export default Directory;
