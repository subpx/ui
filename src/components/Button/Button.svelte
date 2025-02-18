<script>
  import classnames from 'classnames';
  import { createEventDispatcher } from 'svelte';

  import Icon from '../Icon/Icon.svelte';
  import Spinner from '../Spinner/Spinner.svelte';
  import options from './options';

  const dispatch = createEventDispatcher();

  export let type = options.type.DEFAULT;
  export let size = options.size.DEFAULT;
  export let iconPosition = options.iconPosition.ONLY;
  export let iconData = null;
  export let isActive = false;
  export let isBlock = false;
  export let isOutlined = false;
  export let isRounded = false;
  export let isSelected = false;
  export let isWaiting = false;
  export let isWide = false;
  export let isDisabled = false;
  export let htmlType = options.htmlType.BUTTON;

  let ClassNames;
  $: {
    ClassNames = classnames(
      `type-${type}`,
      `size-${size}`,
      {
        [`iconPosition-${iconPosition}`]: iconData,
        isActive,
        isBlock,
        isSelected,
        isOutlined,
        isRounded,
        isWaiting,
        isWide
      }
    );
  }

  let HtmlDisabled;
  $: {
    HtmlDisabled = isDisabled || isWaiting;
  }

  function onClick(event) {
    dispatch('click', event);
  }
</script>

<style>
  .button {
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    padding: 10px 16px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-decoration: none;
    position: relative;
    transition: background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);
    overflow: hidden;
  }

  .button:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .button.isActive {
    pointer-events: none;
  }

  .size-large {
    font-size: 18px;
    line-height: 22px;
    padding: 11px 24px;
  }

  .size-compact {
    line-height: 16px;
    font-size: 13px;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .size-mini {
    line-height: 16px;
    font-size: 12px;
    padding: 4px 6px;
  }

  .iconPosition-only {
    font-size: 28px;
    padding: 4px;
  }

  .size-large.iconPosition-only {
    font-size: 36px;
    line-height: 36px;
    padding: 4px 6px;
  }

  .size-compact.iconPosition-only {
    font-size: 24px;
    padding: 3px;
  }

  .size-mini.iconPosition-only {
    font-size: 20px;
    padding: 2px;
  }

  .type-default {
    background-color: var(--green_4);
    color: var(--white);
  }

  .type-default:hover {
    background-color: var(--green_5);
  }

  .type-default:active {
    background-color: var(--green_6);
  }

  .type-default.isOutlined {
    background-color: #fff;
    border: 1px solid var(--green_4);
    color: var(--green_4);
  }

  .type-default.isSelected {
    background-color: var(--green_6);
  }

  .type-default.isOutlined:active {
    box-shadow: 0 0 0 1px var(--green_6) inset;
    border: 1px solid var(--green_6);
  }

  .type-destructive {
    background-color: var(--red_4);
    color: #fff;
  }

  .type-destructive:hover {
    background-color: var(--red_5);
  }

  .type-destructive:active,
  .type-destructive.isSelected {
    background-color: var(--red_6);
  }

  .type-destructive.isOutlined {
    background: #fff;
    border: 1px solid var(--red_4);
    color: var(--red_4);
  }

  .type-destructive.isOutlined:active {
    box-shadow: 0 0 0 1px var(--red_6) inset;
    border: 1px solid var(--red_6);
  }

  .type-primary {
    background-color: var(--blue_4);
    color: var(--white);
  }

  .type-primary:hover {
    background-color: var(--blue_5);
  }

  .type-primary:active {
    background-color: var(--blue_6);
  }

  .type-primary.isOutlined {
    background: #fff;
    border: 1px solid var(--blue_4);
    color: var(--blue_4);
  }

  .type-primary.isOutlined:active {
    box-shadow: 0 0 0 1px var(--blue_5) inset;
    border: 1px solid var(--blue_5);
  }

  .type-primary.isSelected {
    background-color: var(--blue_5);
  }

  .type-subtle {
    background-color: var(--neutral_0);
    color: var(--neutral_4);
  }

  .type-subtle:hover {
    background-color: var(--neutral_1);
  }

  .type-subtle.isActive {
    background-color: var(--blue_4);
    color: #fff;
  }

  .type-subtle:active {
    background-color: var(--neutral_3);
    color: var(--white);
  }

  .type-subtle.isSelected {
    background-color: var(--neutral_3);
    color: var(--white);
  }

  .type-link {
    background-color: transparent;
    color: var(--neutral_4);
  }

  .type-link.isSelected,
  .type-link:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .type-link:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .type-link.isOutlined {
    border: 1px solid var(--neutral_4);
    color: var(--neutral_4);
  }

  .type-link.isSelected {
    background-color: var(--neutral_0);
  }

  .type-primaryLink {
    background-color: transparent;
    color: var(--blue_5);
  }

  .type-primaryLink.isOutlined {
    border: 1px solid var(--blue_5);
  }

  .type-primaryLink.isSelected,
  .type-primaryLink:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .type-primaryLink:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .type-primaryLink.isSelected {
    background-color: var(--neutral_0);
  }

  .type-ghost {
    background-color: transparent;
    color: #fff;
  }

  .type-ghost.isSelected,
  .type-ghost:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .type-ghost:active {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .type-ghost.isSelected {
    background-color: var(--neutral_9);
  }

  .button.isBlock {
    width: 100%;
  }

  .button.isRounded {
    border-radius: 15px;
  }

  .button.isWide {
    padding-left: 32px;
    padding-right: 32px;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    pointer-events: none;
  }

  .isBlock .inner {
    justify-content: center;
  }

  .icon {
    display: block;
    width: 16px;
    min-width: 16px;
    height: 16px;
  }

  .iconPosition-left .icon {
    margin-right: 5px;
    order: -1;
  }

  .iconPosition-right .icon {
    margin-left: 5px;
    order: 1;
  }

  .size-large .icon {
    width: 22px;
    height: 22px;
  }

  .size-compact .icon {
    width: 16px;
    min-width: 16px;
    height: 16px;
  }

  .size-mini .icon {
    width: 14px;
    height: 14px;
  }

  .iconPosition-only .icon {
    width: 1em;
    height: 1em;
  }

  .spinner {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -8px;
    margin-left: -8px;
    animation: spinnerEnter 0.3s ease-out;
  }

  .isWaiting .inner {
    visibility: hidden;
  }

  @keyframes spinnerEnter {
    from {
      opacity: 0;
    }
  }
</style>


<button class="button { ClassNames }" disabled="{ HtmlDisabled }" on:click="{onClick}" type="{ htmlType }">
  { #if isWaiting }
  <span class="spinner">
    <Spinner></Spinner>
  </span>
  { /if }

  <span class="inner">
    { #if iconData }
    <span class="icon">
      <Icon { iconData }></Icon>
    </span>
    { /if }

    <span>
      <slot></slot>
    </span>
  </span>
</button>
