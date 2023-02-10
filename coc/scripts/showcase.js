const membersHTML = document.querySelectorAll('.member');
const memberDataURL = "data/members.json";

async function apiFetch() {
    try {
        const response = await fetch(memberDataURL);
        if (response.ok) {
            const memberData = await response.json();
            displayResultsMembers(memberData);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

// Choose 4 random members to display

function displayResultsMembers(data) {
    let indexChosen = [];
    let randomMembers = [];
    let randomMember;
    for (let i = 0; i < 4; i++) {
        randomMember = data.members[Math.floor(Math.random() * data.members.length)];
        if ((randomMember.membership == "Gold" || randomMember.membership == "Silver")&& !indexChosen.includes(randomMember)) {
            randomMembers.push(randomMember);
            indexChosen.push(randomMember);
        }
        else{
            i--;
        }
    }
    for (let i = 0; i < membersHTML.length; i++) {
        const member = membersHTML[i];
        const randomMember = randomMembers[i];
        const memberName = document.createElement('h2');
        memberName.textContent = randomMember.name;
        member.appendChild(memberName);
        const memberContent = document.createElement('div');
        memberContent.classList.add('member-content');
        const memberAddress = document.createElement('p');
        memberAddress.textContent = randomMember.address;
        memberContent.appendChild(memberAddress);
        member.appendChild(memberContent);
        const memberLink = document.createElement('a');
        memberLink.setAttribute('href', randomMember.link);
        memberLink.textContent = 'Learn More';
        memberContent.appendChild(memberLink);

        const memberImage = document.createElement('img');
        imgLocation = "images/" + randomMember.logo;
        memberImage.setAttribute('src', imgLocation);
        memberImage.setAttribute('alt', randomMember.name);
        memberImage.setAttribute("loading", "lazy");
        member.appendChild(memberImage);
    


    }
}