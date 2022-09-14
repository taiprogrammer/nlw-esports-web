function FormAds() {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="whichGame">Qual o Game</label>
        <select className="w-[450px]" id="whichGame">
          <option value="0">Selecione o game que deseja jogar</option>
          <option value="1">League of Legends</option>
          <option value="2">Dota 2</option>
          <option value="3">Counter Strike</option>
          <option value="4">Apex</option>
          <option value="5">Fortnite</option>
          <option value="6">World of Warcraft</option>
        </select>
      </div>
    </div>
  );
}

export default FormAds;
