// Clash of Clans API Token (Replace with your own)
const API_TOKEN = 'YOUR_CLASH_OF_CLANS_API_KEY';

// Clan Tag (Replace with the tag of the clan you want to fetch)
const CLAN_TAG = '#CLANTAG';

// Function to fetch clan info from the Clash of Clans API
async function fetchClanInfo() {
    const response = await fetch(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(CLAN_TAG)}`, {
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`
        }
    });

    const data = await response.json();
    document.getElementById('clan-name').textContent = data.name;
    document.getElementById('clan-level').textContent = data.clanLevel;
    document.getElementById('clan-points').textContent = data.clanPoints;
    document.getElementById('clan-members').textContent = data.members;
    document.getElementById('clan-war-wins').textContent = data.warWins;
}

// Call the function on page load
fetchClanInfo();
      
