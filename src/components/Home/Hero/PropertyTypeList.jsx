const PropertyTypeList = ({ propertyTypes, selectedPropertyTypes, onPropertyTypeChange }) => {
  return (
    <ul className='space-y-1 p-4 font-medium'>
      { propertyTypes.map((propertyType) => (
        <li key={ propertyType }>
          <label htmlFor={ `Filter${propertyType}` } className='inline-flex items-center gap-2'>
            <input
              type='checkbox'
              id={ `Filter${propertyType}` }
              checked={ selectedPropertyTypes.includes(propertyType) }
              onChange={ () => onPropertyTypeChange(propertyType) }
              className='size-5 border accent-primary border-edge rounded-md bg-border'
            />
            <span>{ propertyType }</span>
          </label>
        </li>
      )) }
    </ul>
  );
};

export default PropertyTypeList;