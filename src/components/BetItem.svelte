<script lang="ts">
  export let bet;
  export let removeBet;

  console.log("Apuesta recibida en BetItem:", bet);

  function handleRemove() {
    console.log("Eliminando apuesta:", bet);
    removeBet(bet);
  }
</script>

<div class="bet-item">
  <div class="bet-item__info">
    <strong class="bet-item__info_type">{bet.type}</strong>
    <button class="bet-item__remove" on:click={handleRemove}>✖</button>
    <p>{bet.race}</p>
    <p>{bet.number} - {bet.horse}</p>
  </div>

  <div class="bet-item__actions">
    <span>Monto: {bet.amount}</span>
  </div>
</div>
