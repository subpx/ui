<script>
  import Search from 'sveltekit/Search';

  let searchText = '';
</script>

<Search bind:value={searchText} />
<p>Search text: {searchText}</p>
