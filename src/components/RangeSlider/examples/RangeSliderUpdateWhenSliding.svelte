<script>
  import RangeSlider from 'sveltekit/RangeSlider';
  
  let values = [0];
</script>

<RangeSlider bind:values updateWhenSliding></RangeSlider>

<p>selected: {values[0]}</p>
