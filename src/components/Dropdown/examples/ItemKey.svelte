<script>
  import Button from 'sveltekit/Button';
  import Dropdown from 'sveltekit/Dropdown';
  import { MORE } from '../../Icon/_iconData';

  export let items = [
    {
      title: 'Menu Item 1',
      id: 1
    },
    {
      title: 'Menu Item 2',
      id: 2
    }
  ];

  export let itemKey = 'title';
</script>

<Dropdown {items} {itemKey}>
  <Button iconData={MORE} />
</Dropdown>
