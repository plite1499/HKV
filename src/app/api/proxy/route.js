export default async function handler(req, res) {
  const { gameName, tagLine } = req.query;

  const response = await fetch(
    `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
  );

  const data = await response.json();

  res.status(response.status).json(data);
}
