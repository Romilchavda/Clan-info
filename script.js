// Clash of Clans API Token (Replace with your own)
const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFlNzVjMjNhLTM4YWEtNDY3Ni04MDg4LWQxNDdmODI4ZmIxNyIsImlhdCI6MTcyODY1MzYyNSwic3ViIjoiZGV2ZWxvcGVyL2M2M2M0YTU2LTJjYTEtYWZhZS1kZTI1LTdlNmQxYTY0NjM3ZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.dHsvn0N8F0zv5_TCN0KYwwtM0sUH80cZoRECB9qyxKOw7-OJocapz9cGSTeF5PH_aALeOLN1_Pccn6rpfWel8Q';

// Clan Tag (Replace with the tag of the clan you want to fetch)
const CLAN_TAG = '#2QGVCCPJC';

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
      
