<script lang="ts">

  import Card from './lib/Card.svelte';
  import links from './assets/links.json';

  import everest from '/everest.png';

  let selected: number = 0;

  let CARDS_ON_SCREEN: number = 1;
  let MOVE_BY: number = 1;

  $: cardSize = (100 / CARDS_ON_SCREEN);
  $: totalCardSize = links.length * cardSize;
  $: currentPosition = -selected * (100 / links.length);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 900) {
      CARDS_ON_SCREEN = 1;
      MOVE_BY = 1;
    }
  });
  
</script>

<main class="flex col center" style="width: 100vw;">

  <div class="flex row" style="justify-content: center; width: 100%;">

    <button class="arrow-side" on:click={() => selected = Math.max(selected - MOVE_BY, 0)}>&larr;</button>

    <div style="width: 80%; overflow-x: hidden;">

      <div id="cards" class="flex row around" style="--totalCardSize: {totalCardSize}%; --currentPosition: {currentPosition}%;">

        {#each links as link}

        <div class="flex row center" style="width: {cardSize}%;">

          <Card type="template" link={link.link} image={everest} title={link.title} description={link.description}/>

        </div>

        {/each}

      </div>

    </div>

    <button class="arrow-side" on:click={() => selected = Math.min(selected + MOVE_BY, links.length - CARDS_ON_SCREEN)}>&rarr;</button>

  </div>

  <div class="flex row center gap-large arrow-bottom" style="margin-top: 50px;">
    <button on:click={() => selected = Math.max(selected - MOVE_BY, 0)}>&larr;</button>
    <button on:click={() => selected = Math.min(selected + MOVE_BY, links.length - CARDS_ON_SCREEN)}>&rarr;</button>
  </div>

  <div class="flex col center gap-large option-slider" style="margin-top: 20px;">
    <div class="slider">
      <label for="onScreenCards">Cards shown: {CARDS_ON_SCREEN}</label>
      <input name="onScreenCards" type="range" min="1" max="5" step="1" bind:value={CARDS_ON_SCREEN}>
    </div>
    <div class="slider">
      <label for="moveBy">Move by: {MOVE_BY}</label>
      <input name="moveBy" type="range" min="1" max="5" step="1" bind:value={MOVE_BY}>
    </div>
  </div>

</main>

<style>

  #cards {

    width: var(--totalCardSize);
    transform: translateX(var(--currentPosition));
    
    will-change: transform;

    transition: transform 330ms;

  }

  .arrow-side {
    display: none;
  }

  .arrow-bottom {
    display: flex;
  }

  .option-slider {
    display: none;
  }

  @media (min-width: 900px) {

    .arrow-side {
      display: block;
    }

    .arrow-bottom {
      display: none;
    }

    .option-slider {
      display: flex;
    }

  }
  
</style>
