<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  import classnames from 'classnames';
  import Avatar from '../Avatar/Avatar.svelte';
  import Button from '../Button/Button.svelte';
  import Icon from '../Icon/Icon.svelte';
  import Spinner from '../Spinner/Spinner.svelte';

  import buttonOptions from '../Button/options';
  import {REMOVE} from '../Icon/_iconData';

  export let avatar = null;
  export let isRemovable = false;
  export let isDisabled = false;
  export let isWaiting = false;
  export let isActive = false;

  let ClassNames;
  $: {
    ClassNames = classnames({
      hasAvatar: avatar,
      isRemovable
    });
  }

  let HtmlDisabled;
  $: {
    HtmlDisabled = isDisabled || isWaiting;
  }

  function onButtonClick(event) {
    dispatch('click', event);
  }

  function onRemoveClick(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch('remove', event);
  }
</script>

<style>
  .chip {
    display: inline-block;
    position: relative;
  }

  .isRemovable :global(.button) {
    padding-right: 35px;
  }

  .hasAvatar .text {
    padding-left: 25px;
  }

  .avatar {
    position: absolute;
    left: 0;
    top: 0;
  }

  .removeIcon {
    pointer-events: all;
    cursor: pointer;
    position: absolute;
    width: 16px;
    height: 16px;
    right: 7px;
    top: 7px;
    z-index: 2;
  }

  .removeIcon:hover {
    color: #fff;
  }

  .spinner {
    color: #fff;
    cursor: default;
  }
</style>


<div class="chip {ClassNames}">
  <Button size="compact" type="{buttonOptions.type.SUBTLE}" on:click="{onButtonClick}" {isActive} {isDisabled}
    isRounded>
    <span class="text">
      <slot></slot>
    </span>

    { #if avatar }
    <span class="avatar">
      <Avatar alt="{avatar.alt}" src="{avatar.src}"></Avatar>
    </span>
    { /if }
  </Button>

  { #if isRemovable && !isWaiting }
  <i class="removeIcon" on:click="{onRemoveClick}" style="color: { isActive ? '#fff' : 'inherit' };">
    <Icon iconData="{REMOVE}"></Icon>
  </i>
  { /if }

  { #if isRemovable && isWaiting }
  <div class="removeIcon spinner">
    <Spinner></Spinner>
  </div>
  {/if}
</div>
