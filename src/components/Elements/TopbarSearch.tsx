import Select, { components } from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

/* custom menu list */
const MenuList = (props: any) => {
  const { options } = props.selectProps;

  return (
    <components.MenuList {...props}>
      {/* menu header */}
      <div className="dropdown-header noti-title">
        <h5 className="text-overflow mb-2">Found {options.length} results</h5>
      </div>
      {props.children}
    </components.MenuList>
  );
};
export const TopbarSearch = () => {
  return (
    <Select
      options={options}
      components={{ MenuList }}
      placeholder={'Search...'}
      maxMenuHeight={350}
      isSearchable
      isClearable
      name="search-app"
      className="app-search"
      classNamePrefix="react-select" />
  )
}