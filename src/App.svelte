<script lang="ts">

  import Card from './lib/Card.svelte';
  import links from './assets/links.json';

  import everest from '/everest.png';

  let selected: number = 0;
  
</script>

<main class="flex col" style="width: 100vw;">

  <div id="cards" class="flex row around" style="width: calc({links.length * 33}vw + {links.length * 10}px); transform: translateX({100 / links.length - (selected * (100 / links.length))}%);">

    {#each links as link}

    <div class="flex row center" style="width: 33vw;">

      <Card link={link.link}>
        
        <img class="cardImg" alt="placeholder" src={everest}>

        <div class="cardText">
          <h1 class="text-large title">{link.title}</h1>
          <span class="text-small desc">{link.description}</span>
        </div>

      </Card>

    </div>

    {/each}

  </div>

  <div class="flex row center gap-large" style="margin-top: 50px;">
    <button on:click={() => selected = Math.max(selected - 1, 0)}>&larr;</button>
    <button on:click={() => selected = Math.min(selected + 1, links.length - 1)}>&rarr;</button>
  </div>

</main>

<style>

  #cards {
    
    will-change: transform;

    transition: transform 330ms;

    /* gap: 30px; */

  }

  .cardImg {

    width: 50%;

    border-radius: 0.625em;

  }

  .cardText {

    height: 90%;
    width: 50%;

    display: flex;
    flex-direction: column;
    gap: 0.125em;
    
    text-align: left;
    
  }

  .title {
    text-transform: uppercase;
    font-weight: bold;
  }

  .desc {

    font-weight: 300;

    overflow: hidden;

    display: -webkit-box;

    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

  }
  
</style>
