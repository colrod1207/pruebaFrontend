<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import BetItem from "./BetItem.svelte";
  import { FakeApi } from "../infrastructure/data/inMemory/api/FakeApi";

  const api = new FakeApi();
  const dispatch = createEventDispatcher();
  export let bets = [];

  // 🔹 Cargar apuestas desde `localStorage` al iniciar
  onMount(() => {
    bets = JSON.parse(localStorage.getItem("bets")) || [];
  });

  // 🔹 Actualizar `localStorage` cuando cambian las apuestas
  function updateLocalStorage() {
    localStorage.setItem("bets", JSON.stringify(bets));
  }

  // 🔹 Agregar una apuesta sin sobrescribir las anteriores
  export function addBet(newBet) {
    bets = [...bets, newBet]; // Agregar la apuesta sin perder las previas
    updateLocalStorage();

    // 🔹 Forzar la actualización recargando desde `localStorage`
    bets = JSON.parse(localStorage.getItem("bets")) || [];
  }

  // 🔹 Eliminar una apuesta específica
  function handleRemoveBet(index: number) {
    bets = bets.filter((_, i) => i !== index); // 🔹 Filtrar en vez de modificar directamente el array
    updateLocalStorage();
  }

  // 🔹 Limpiar todas las apuestas
  function clearBets() {
    localStorage.removeItem("bets");
    bets = [];
    updateLocalStorage();
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
    <button class="bet-slip__submit">Realizar Apuesta</button>
  </div>
</div>
