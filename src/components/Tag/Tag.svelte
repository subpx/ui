<script>
  import classnames from 'classnames';
  import inlinestyles from '../../helpers/inlineStyles';
  import Icon from '../Icon/Icon.svelte';
  import options from './options';

  export let iconData = null;
  export let iconPosition = options.iconPosition.ONLY;
  export let backgroundColour = '#ff9500';
  export let color = '#ffffff';

  export let ClassNames;
  $: {
    ClassNames = classnames({
      [`iconPosition-${iconPosition}`]: iconData
    });
  }

  export let Styles;
  $: {
    Styles = inlinestyles({
      'background-color': backgroundColour,
      color
    });
  }
</script>

<style>
  .tag {
    border-radius: 2px;
    font-size: 11px;
    font-weight: 600;
    line-height: 12px;
    text-align: center;
    display: inline-block;
    padding: 4px 8px;
    white-space: nowrap;
    overflow: hidden;
  }

  .iconPosition-only {
    padding-left: 4px;
    padding-right: 4px;
  }

  .iconPosition-left {
    padding-left: 4px;
  }

  .iconPosition-right {
    padding-right: 4px;
  }

  .inner {
    display: flex;
    align-items: center;
  }

  .icon {
    display: block;
    width: 12px;
    height: 12px;
  }

  .text {
    order: 1;
  }

  .iconPosition-left .icon {
    order: 0;
    margin-right: 4px;
  }

  .iconPosition-right .icon {
    order: 2;
    margin-left: 4px;
  }
</style>

<div class="tag {ClassNames}" style={Styles}>
  <div class="inner">
    {#if iconData}
      <span class="icon">
        <Icon {iconData} />
      </span>
    {/if}

    <span class="text">
      <slot />
    </span>
  </div>
</div>
