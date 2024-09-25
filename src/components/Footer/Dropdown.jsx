const Dropdown = ({ id, label, links, openDropdown, handleDropdownToggle }) => (
  <div>
    <div
      onClick={ () => handleDropdownToggle(id) }
      tabIndex='0'
      className='flex cursor-pointer items-center justify-between transition w-full md:hidden'
    >
      <span>{ label }</span>
      <span className={ `text-primary transition ${openDropdown === id ? '-rotate-180' : ''}` }>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2.5'
          stroke='currentColor'
          className='size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </span>
    </div>
    <hr className='block md:hidden border border-border rounded-full my-3' />
    <ul className={ `flex flex-col space-y-2.5 ${openDropdown === id ? 'block' : 'hidden'} md:block` }>
      <li className='hidden md:block'>{ label }</li>
      { links.map(link => (
        <li key={ link.label }>
          <a href={ link.href } className='text-primary hover:underline hover:underline-offset-4'>{ link.label }</a>
        </li>
      )) }
    </ul>
  </div>
);

export default Dropdown;