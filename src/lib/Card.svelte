
<script lang="ts">

    export let link: string = '/';

</script>

<a href={link} class="card">

    <slot></slot>

</a>

<style>

    .card {

        background-color: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4px);

        width: 80%;
        /* height: 200px; */

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

</style>