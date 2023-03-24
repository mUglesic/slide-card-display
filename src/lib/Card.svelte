
<script lang="ts">

    export let link: string = '/';
    export let type: string = 'slot';

    export let image: string = '';
    export let title: string = '';
    export let description: string = '';

</script>

<a href={link} class="card">

    {#if type === 'slot'}

        <slot></slot>

    {:else if type === 'template'}

        <img class="cardImg" alt="placeholder" src={image}>

        <div class="cardText">
        <h1 class="title">{title}</h1>
        <span class="desc">{description}</span>
        </div>

    {/if}

</a>

<style>

    .card {

        background-color: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6px);

        width: 80%;
        min-height: 200px;

        display: flex;
        flex-direction: row;
        gap: 0.5em;
        place-items: center;

        padding: 0.5em 1em;

        border: rgba(255, 255, 255, 0.5) solid 2px;
        border-radius: 0.625em;

        color:rgba(255, 255, 255, 0.87);

        overflow: hidden;

        transition: border-color 200ms;

    }

    .card:hover {

        border-color: rgba(255, 255, 255, 0.87);

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

        font-size: 1.8em;
        line-height: 1.5em;

        text-transform: uppercase;
        font-weight: bold;

    }

    .desc {

        font-size: 1em;
        line-height: 1.4em;

        font-weight: 300;

        overflow: hidden;

        display: -webkit-box;

        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

    }

</style>