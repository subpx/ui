<script>
  import Button, { options } from 'sveltekit/Button';

  let isWaiting = false;
</script>

<div class="row">
  <Button {isWaiting}>Button</Button>

  <Button
    type={options.type.SUBTLE}
    isSelected={isWaiting}
    on:click={() => (isWaiting = true)}>
    Start waiting
  </Button>

  <Button
    type={options.type.SUBTLE}
    isSelected={!isWaiting}
    on:click={() => (isWaiting = false)}>
    Stop waiting
  </Button>
</div>
