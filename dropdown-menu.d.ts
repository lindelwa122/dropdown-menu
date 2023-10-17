declare module 'dropdown-menu' {
  /**
   * Dropdown item click handler function.
   */
  type DropdownItemClickHandler = (item: HTMLLIElement) => void;

  /**
   * Dropdown module function.
   * @param title - Title of the dropdown. Text displayed on the dropdown
   * @param listItems - An array of items to be displayed as options
   * @param clickHandler - Handles the click event for each list item
   * @return A method that appends the dropdown to the page
   */
  export default function dropdown(
    title: string,
    listItems: string[],
    clickHandler?: DropdownItemClickHandler
  ): {
    /**
     * Adds the dropdown to the page using the specified selector.
     * @param selector - Selects an element
     */
    append(selector: string): void;
  };
}
