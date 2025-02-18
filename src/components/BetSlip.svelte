<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import BetItem from "./BetItem.svelte";
  import { FakeApi } from "../infrastructure/data/inMemory/api/FakeApi";

  const api = new FakeApi();
  const dispatch = createEventDispatcher();
  export let bets = [];
  
  let showNotification = false;

  onMount(() => {
    bets = JSON.parse(localStorage.getItem("bets")) || [];
  });

  function updateLocalStorage() {
    localStorage.setItem("bets", JSON.stringify(bets));
  }

  export function addBet(newBet) {
    bets = [...bets, newBet]; 
    updateLocalStorage();

    bets = JSON.parse(localStorage.getItem("bets")) || [];
  }

  function handleRemoveBet(index: number) {
    bets = bets.filter((_, i) => i !== index); 
    updateLocalStorage();
  }

  function clearBets() {
    localStorage.removeItem("bets");
    bets = [];
    updateLocalStorage();
  }

  function Notifications() {
    if (bets.length > 0) { 
      showNotification = true;

      setTimeout(() => {
        showNotification = false; 
      }, 3000);
    }

    localStorage.removeItem("bets");
    bets = [];
  }
</script>

<div class="bet-slip">
  <div class="bet-slip__title_container">
    <h3 class="bet-slip__title">TALÓN DE APUESTAS 
      <button class="bet-slip__clear" on:click={clearBets}>
        ✖
      </button></h3>
  </div>

  <div class="bet-slip__list">
    {#each bets as bet, index}
      <BetItem {bet} removeBet={() => handleRemoveBet(index)} />
    {/each}
  </div>

  <div class="bet-slip__footer">
    <p>Número de apuestas: {bets.length}</p>
    <p>Total: {bets.reduce((sum, bet) => sum + bet.amount, 0).toFixed(2)}</p>
    <button class="bet-slip__submit"  on:click={Notifications}>Realizar Apuesta</button>
    {#if showNotification}
      <div class="notification">✅ Apuesta realizada exitosamente</div>
    {/if}
  </div>
</div>
