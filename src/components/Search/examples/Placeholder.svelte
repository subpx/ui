<script>
  import Search from 'sveltekit/Search';

  let searchText = '';
</script>

<Search bind:value={searchText} placeholder="Enter search here..."></Search>
<p>Search text: {searchText}</p>
