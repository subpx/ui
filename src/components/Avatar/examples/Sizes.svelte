<script>
  import Avatar, { options } from 'sveltekit/Avatar';
  import NumberInput from 'sveltekit/NumberInput';
  import Icon from 'sveltekit/Icon';
  import { PLANE } from '../../Icon/_iconData';


  let image = '/avatar_example.gif';
  let customSize = 150;
  let initials = 'HI';

  let Component = Icon;
  let componentProps = {
    iconData: PLANE
  };
</script>

<style>
  .customSize span {
    display: block;
    margin: 0 0 5px;
  }
</style>

<div class="row">
  <label class="customSize">
    <span>Custom size</span>
    <NumberInput step={10} bind:value={customSize} />
  </label>
</div>

<div class="row">
  {#each Object.entries(options.size) as [sizeKey, size]}
    <span>
      <Avatar src={image} {size} />
    </span>
  {/each}
  <span>
    <Avatar src={image} size={customSize} />
  </span>
</div>

<div class="row">
  {#each Object.entries(options.size) as [sizeKey, size]}
    <span>
      <Avatar alt={initials} {size} />
    </span>
  {/each}
  <span>
    <Avatar alt={initials} size={customSize} />
  </span>
</div>

<div class="row">
  {#each Object.entries(options.size) as [sizeKey, size]}
    <span>
      <Avatar {Component} {componentProps} {size} />
    </span>
  {/each}
  <span>
    <Avatar {Component} {componentProps} size={customSize} />
  </span>
</div>
